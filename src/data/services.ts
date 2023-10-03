import bloodPressureMobile from '../assets/services/blood-pressure-mobile.jpg';
import bloodPressureTablet from '../assets/services/blood-pressure-tablet.jpg';
import bloodPressureDesktop from '../assets/services/blood-pressure-desktop.jpg';
import bloodPressureItem from '../assets/services/blood-pressure-item.png';

import nebulizerMobile from '../assets/services/nebulizer-mobile.jpg';
import nebulizerTablet from '../assets/services/nebulizer-tablet.jpg';
import nebulizerDesktop from '../assets/services/nebulizer-desktop.jpg';
import nebulizerItem from '../assets/services/nebulizer-item.png';

import hearingAidMobile from '../assets/services/hearing-aid-mobile.jpg';
import hearingAidTablet from '../assets/services/hearing-aid-tablet.jpg';
import hearingAidDesktop from '../assets/services/hearing-aid-desktop.jpg';
import hearingAidItem from '../assets/services/hearing-aid-item.png';

import oralIrrigatorMobile from '../assets/services/oral-irrigator-mobile.jpg';
import oralIrrigatorTablet from '../assets/services/oral-irrigator-tablet.jpg';
import oralIrrigatorDesktop from '../assets/services/oral-irrigator-desktop.jpg';
import oralIrrigatorItem from '../assets/services/oral-irrigator-item.png';

import cuffMobile from '../assets/services/cuff-mobile.jpg';
import cuffTablet from '../assets/services/cuff-tablet.jpg';
import cuffDesktop from '../assets/services/cuff-desktop.jpg';
import cuffItem from '../assets/services/cuff-item.png';

import oxygenConcentratorMobile from '../assets/services/oxygen-concentrator-mobile.jpg';
import oxygenConcentratorTablet from '../assets/services/oxygen-concentrator-tablet.jpg';
import oxygenConcentratorDesktop from '../assets/services/oxygen-concentrator-desktop.jpg';
import oxygenConcentratorItem from '../assets/services/oxygen-concentrator-item.png';

import { ReactComponent as BloodPressure } from '../assets/services/blood-pressure-icon.svg';
import { ReactComponent as Nebulizer } from '../assets/services/nebulizer-icon.svg';
import { ReactComponent as HearingAid } from '../assets/services/hearing-aid-icon.svg';
import { ReactComponent as OralIrrigator } from '../assets/services/oral-irrigator-icon.svg';
import { ReactComponent as Cuff } from '../assets/services/cuff-icon.svg';
import { ReactComponent as OxygenConcentrator } from '../assets/services/oxygen-concentrator-icon.svg';

import { IServicesData } from '../interfaces/services.interface';

const ServicesData: IServicesData[] = [
  {
    id: 'blood-pressure',
    title: 'Ремонт тонометра',
    images: {
      mobile: bloodPressureMobile,
      tablet: bloodPressureTablet,
      desktop: bloodPressureDesktop,
    },
    icon: bloodPressureItem,
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
      icon: BloodPressure,
      text: "– це медичний прилад, який допомагає контролювати артеріальний тиск, вимірюючи систолічний та діастолічний показники. Він не лише незамінний для людей з проблемами артеріального тиску, але й є важливим інструментом для загального контролю над вашим здоров'ям.",
    },
  },
  {
    id: 'nebulizer',
    title: 'Ремонт небулайзера',
    images: {
      mobile: nebulizerMobile,
      tablet: nebulizerTablet,
      desktop: nebulizerDesktop,
    },
    icon: nebulizerItem,
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
      icon: Nebulizer,
      text: "– це пристрій, який працює на користь вашого дихального здоров'я. Він перетворює лікарські препарати в аерозольну хмару, що легко і ефективно доставляється в легені, впливаючи на всі відділи дихальної системи і поліпшуючи лікування таких станів, як кашель, бронхіт, та запалення легенів.",
    },
  },
  {
    id: 'hearing-aid',
    title: 'Ремонт слухового апарата',
    images: {
      mobile: hearingAidMobile,
      tablet: hearingAidTablet,
      desktop: hearingAidDesktop,
    },
    icon: hearingAidItem,
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
      icon: HearingAid,
      text: '– цей прилад є технологічним проривом в галузі слухового відновлення. Він здатний посилити і покращити звуки, дозволяючи користувачам з різними ступенями втрати слуху насолоджуватися різноманітністю звуків навколишнього світу.',
    },
  },
  {
    id: 'oral-irrigator',
    title: 'Ремонт іригатора',
    images: {
      mobile: oralIrrigatorMobile,
      tablet: oralIrrigatorTablet,
      desktop: oralIrrigatorDesktop,
    },
    icon: oralIrrigatorItem,
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
      icon: OralIrrigator,
      text: "– цей прилад є невід'ємною частиною щоденного гігієнічного догляду за ротовою порожниною. Він застосовує силу води для ретельного очищення міжзубних просторів і зубоясеневих складок, що допомагає видалити зубний наліт і забезпечити здоров'я ясен.",
    },
  },
  {
    id: 'cuff',
    title: 'Ремонт манжети',
    images: {
      mobile: cuffMobile,
      tablet: cuffTablet,
      desktop: cuffDesktop,
    },
    icon: cuffItem,
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
      icon: Cuff,
      text: '– змінний аксесуар, що забезпечує точність вимірювання артеріального тиску. Вона грає ключову роль у передачі компресійного тиску з перетискуваної артерії, забезпечуючи точні та надійні результати.',
    },
  },
  {
    id: 'oxygen-concentrator',
    title: 'Ремонт концентратора',
    images: {
      mobile: oxygenConcentratorMobile,
      tablet: oxygenConcentratorTablet,
      desktop: oxygenConcentratorDesktop,
    },
    icon: oxygenConcentratorItem,
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
      icon: OxygenConcentrator,
      text: "– медичний пристрій, який розроблений для забезпечення збагаченого киснем повітря. Він може бути незамінний для людей з порушеннями функції дихання, а також може служити як важливий інструмент для підтримки загального здоров'я, концентруючи кисень з атмосферного повітря.",
    },
  },
];

export default ServicesData;
