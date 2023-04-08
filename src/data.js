// import images
// import LogoImg from '../src/assets/img/header/logo.svg';
import LogoImg from '../src/assets/img/header/logo.png';
// import HeroImg from '../src/assets/img/hero/image.svg';
import HeroImg from '../src/assets/img/hero/image.png';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
// import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
// import GoogleImg from '../src/assets/img/overview/brands/google.svg';
// import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
// import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
// import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
// import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature1Img from '../src/assets/img/features/feature1.jpg';
import Feature2Img from '../src/assets/img/features/startupindia.webp';
// import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/startinup.webp';
// import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';
import Paytm from '../src/assets/img/overview/brands/paytm.svg';
// import Icici from '../src/assets/img/overview/brands/ICICI_Bank_Logo.svg';
import Shiprocket from '../src/assets/img/overview/brands/shiprocket.svg';
import Delhivery from '../src/assets/img/overview/brands/delhivery.svg';
import Icici from '../src/assets/img/overview/brands/icici.png';



export const header = {
  logo: LogoImg,
  btnText: 'Download App',
};

export const nav = [
  { name: 'Blogs', href: 'https://nogozo.com/blog/' },
  { name: 'Terms & Conditions', href: 'https://nogozo.com/tnc/' },
  { name: 'Contact Us', href: 'https://api.whatsapp.com/send?text=Hello%20NOGOZO!&phone=918979497958' },
];

export const hero = {
  title: "Buy Rent Sell Books",
  subtitle: "India's online book store for students & readers to buy, rent & sell new as well used books!",
  btnText: 'Download App',
  compText: '',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: Paytm,
      delay: 300,
    },
    {
      image: Icici,
      delay: 400,
    },
    {
      image: Shiprocket,
      delay: 500,
    },
    {
      image: Delhivery,
      delay: 600,
    }
  ],
};

export const features = {
  feature1: {
    pretitle: 'Nogozos journey of Shark Tank India',
    title: 'Nogozo in Shark Tank',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Nogozo as StartUp India registered startup',
    title: 'StartUp India Certified!',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Nogozo get support from UP Government',
    title: 'UP Govt funded Startup',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Indias No 1 Online Book Store',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Buy',
      subtitle: 'Buy new as well as used books at best price',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Rent',
      subtitle: 'Rent any novel or book starting from ₹10',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Sell',
      subtitle: 'Sell your books and get money within 24 hours',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'We have many best wishers',
  clients: [
    {
      message:
        'Smooth platform with variety of books and that too at affordable prices 👍 . I would definitely suggest to give it a try.',
      image: AvatarImg1,
      name: 'Rupali Verma',
      position: '',
      borderColor: '#FF7235',
    },
    {
      message:
        "Fantastic Book App for local one's (Agra) and the outsiders also... Great Delivery Service... Used books quality is superb.. I'm lucky to have connected with ur App❤ #Nogozo",
      image: AvatarImg2,
      name: 'Rubal Singh',
      position: '',
      borderColor: '#FFBE21',
    },
    {
      message:
        "Loved the Cute UI of the app and amazing discounts on Used books and New books. Gonna order more :D",
      image: AvatarImg3,
      name: 'Kukum Chouhan',
      position: '',
      borderColor: '#4756DF',
    },
    {
      message:
        "From doorstep services to rentals, this application is amazing for a reader 📚. Thanks NOGOZO !!",
      image: AvatarImg4,
      name: 'Devanshi Jain',
      position: '',
      borderColor: '#3EC1F3',
    },
    {
      message:
        "Purchased all my exams books from this app. Delivery was quick",
      image: AvatarImg5,
      name: 'Ayush Anchalia',
      position: '',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '10K+ happy customers from 24 different states of India',
  subtitle: 'Try NOGOZO for all your education needs now!',
  btnText: 'Download App',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: 'https://nogozo.com/blog/' },
    { name: 'Terms of use', href: 'https://nogozo.com/tnc/' },
  ],
  legal: [
    { name: 'Terms of use', href: 'https://nogozo.com/tnc/' },
    { name: 'Terms of conditions', href: 'https://nogozo.com/tnc/' },
    { name: 'Privacy policy', href: 'https://nogozo.com/tnc/' }
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2022 nogozo',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
