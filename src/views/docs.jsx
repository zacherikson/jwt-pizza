import React from 'react';
import View from './view';
import { pizzaService } from '../service/service';

const Docs = () => {
  const [docs, setDocs] = React.useState({ endpoints: [] });
  React.useEffect(() => {
    (async () => {
      setDocs(await pizzaService.docs());
    })();
  }, []);

  return (
    <View title='JWT Pizza API'>
      <div className='p-4'>
        {docs.endpoints.map((doc, index) => (
          <div key={index} className='bg-slate-100 text-slate-800 p-4 m-4 rounded-xl'>
            <h2 className='text-xl font-bold text-slate-600'>
              {doc.requiresAuth && <span>🔐</span>} [{doc.method}] {doc.path}
            </h2>
            <p>{doc.description}</p>

            <div className='p-4 bg-neutral-600 text-neutral-50 font-mono text-xs mt-4 mx-4'>{doc.example}</div>
          </div>
        ))}
      </div>
    </View>
  );
};

export default Docs;
