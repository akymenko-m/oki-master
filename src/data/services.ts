import bloodPressureMobile from '../../public/services/blood-pressure-mobile.jpg';
import bloodPressureTablet from '../../public/services/blood-pressure-tablet.jpg';
import bloodPressureDesktop from '../../public/services/blood-pressure-desktop.jpg';

import nebulizerMobile from '../../public/services/nebulizer-mobile.jpg';
import nebulizerTablet from '../../public/services/nebulizer-tablet.jpg';
import nebulizerDesktop from '../../public/services/nebulizer-desktop.jpg';

import hearingAidMobile from '../../public/services/hearing-aid-mobile.jpg';
import hearingAidTablet from '../../public/services/hearing-aid-tablet.jpg';
import hearingAidDesktop from '../../public/services/hearing-aid-desktop.jpg';

import oralIrrigatorMobile from '../../public/services/oral-irrigator-mobile.jpg';
import oralIrrigatorTablet from '../../public/services/oral-irrigator-tablet.jpg';
import oralIrrigatorDesktop from '../../public/services/oral-irrigator-desktop.jpg';

import { IServicesData } from '../interfaces/services.interface';

const ServicesData: IServicesData[] = [
  {
    title: 'Ремонт тонометра',
    images: {
      mobile: bloodPressureMobile,
      tablet: bloodPressureTablet,
      desktop: bloodPressureDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'на точність вимірювання, швидкість спуску повітря, герметичність.',
      },
      {
        title: 'Заміна комплектуючих –',
        text: 'заміна манжети, заміна груші, заміна повітряних трубок тощо.',
      },
      {
        title: 'Ремонт –',
        text: 'ремонт плати, заміна компресору, заміна датчику тиску тощо.',
      },
    ],
    description: {
      title: 'Тонометр',
      text: "– це медичний прилад, який допомагає контролювати артеріальний тиск, вимірюючи систолічний та діастолічний показники. Він не лише незамінний для людей з проблемами артеріального тиску, але й є важливим інструментом для загального контролю над вашим здоров'ям.",
    },
  },
  {
    title: 'Ремонт небулайзера',
    images: {
      mobile: nebulizerMobile,
      tablet: nebulizerTablet,
      desktop: nebulizerDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'на швидкість розпилення, навантаження двигуна.',
      },
      {
        title: 'Заміна комплектуючих –',
        text: 'маски, стаканчик для розпилювання, повітряні трубки тощо.',
      },
      {
        title: 'Ремонт –',
        text: 'ремонт плати, кнопок ввімкнення, зарядного пристрою.',
      },
    ],
    description: {
      title: 'Небулайзер',
      text: "– це пристрій, який працює на користь вашого дихального здоров'я. Він перетворює лікарські препарати в аерозольну хмару, що легко і ефективно доставляється в легені, впливаючи на всі відділи дихальної системи і поліпшуючи лікування таких станів, як кашель, бронхіт, та запалення легенів.",
    },
  },
  {
    title: 'Ремонт слухового апарата',
    images: {
      mobile: hearingAidMobile,
      tablet: hearingAidTablet,
      desktop: hearingAidDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'на гучність, герметичність, чіткість звуку.',
      },
      {
        title: 'Заміна комплектуючих –',
        text: 'ріжок, вушна вкладка, батарейки тощо.',
      },
      {
        title: 'Ремонт –',
        text: 'електронних плат, заміна мікрофону, чистка зовнішня та/або внутрішня з розбором, відновлення дротів.',
      },
    ],
    description: {
      title: 'Слуховий апарат',
      text: '– цей прилад є технологічним проривом в галузі слухового відновлення. Він здатний посилити і покращити звуки, дозволяючи користувачам з різними ступенями втрати слуху насолоджуватися різноманітністю звуків навколишнього світу.',
    },
  },
  {
    title: 'Ремонт іригатора',
    images: {
      mobile: oralIrrigatorMobile,
      tablet: oralIrrigatorTablet,
      desktop: oralIrrigatorDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'тестування батареї, швидкість роботи тощо.',
      },
      {
        title: 'Заміна комплектуючих –',
        text: 'заміна акумулятора, компресора',
      },
      {
        title: 'Ремонт –',
        text: 'ремонт плати, кнопок ввімкнення, зарядного пристрою',
      },
    ],
    description: {
      title: 'Іригатор',
      text: "– цей прилад є невід'ємною частиною щоденного гігієнічного догляду за ротовою порожниною. Він застосовує силу води для ретельного очищення міжзубних просторів і зубоясеневих складок, що допомагає видалити зубний наліт і забезпечити здоров'я ясен.",
    },
  },
  {
    title: 'Ремонт манжети',
    images: {
      mobile: bloodPressureMobile,
      tablet: bloodPressureTablet,
      desktop: bloodPressureDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'на герметичність, міцність липучки.',
      },
      {
        title: 'Ремонт –',
        text: 'відновлення герметичності зап’ястного манометра та інших рідких манжет.',
      },
    ],
    description: {
      title: 'Манжета для тонометра',
      text: '– змінний аксесуар, що забезпечує точність вимірювання артеріального тиску. Вона грає ключову роль у передачі компресійного тиску з перетискуваної артерії, забезпечуючи точні та надійні результати.',
    },
  },
  {
    title: 'Ремонт концентратора',
    images: {
      mobile: bloodPressureMobile,
      tablet: bloodPressureTablet,
      desktop: bloodPressureDesktop,
    },
    features: [
      {
        title: 'Тестування приладу –',
        text: 'на швидкість потоку, концентрації кисню.',
      },
      {
        title: 'Заміна комплектуючих –',
        text: 'фільтрів, стаканчика, маски, трубки тощо.',
      },
      {
        title: 'Ремонт –',
        text: 'відновлення потоку, ремонт плати, заміна кнопок, ремонт компресора.',
      },
    ],
    description: {
      title: 'Концентратор кисню',
      text: "– медичний пристрій, який розроблений для забезпечення збагаченого киснем повітря. Він може бути незамінний для людей з порушеннями функції дихання, а також може служити як важливий інструмент для підтримки загального здоров'я, концентруючи кисень з атмосферного повітря.",
    },
  },
];

export default ServicesData;