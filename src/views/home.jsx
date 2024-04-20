import React from 'react';
import { useNavigate } from 'react-router-dom';
import View from './view';
import Card from '../components/card';
import Carousel from '../components/carousel';
import Quote from '../components/quote';
import Button from '../components/button';

export default function Home() {
  const navigate = useNavigate();

  function orderNow() {
    navigate('/menu');
  }

  return (
    <View title="The valley's best pizza">
      <div className='flow flow-col justify-center'>
        <Button title='Order now' onPress={orderNow} />

        <Carousel
          slides={[
            <Quote quote='Most amazing pizza experience of my life.' author='Megan Fox, Springville' />,
            <Quote quote='Milan reborn!' author='张伟, Provo' />,
            <Quote quote='All I can say is WOW!' author='José García, Orem' />,
            <Quote quote='Best pizza ever. I can eat this every day!' author='Terrence Jones, Mapleton' />,
          ]}
        />

        <div className='m-4 grid gap-x-8 gap-y-4 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-5'>
          <Card title='Springville' description='The Springville store' image='pizza1.png' />
          <Card title='Orem' description='The Orem store' image='pizza2.png' />
          <Card title='Provo' description='The provo store' image='pizza3.png' />
          <Card title='Lindon' description='The Lindon store' image='pizza4.png' />
          <Card title='Nephi' description='The Nephi store' image='pizza5.png' />
          <Card title='American Fork' description='The American Fork store' image='pizza6.png' />
        </div>
      </div>
    </View>
  );
}
