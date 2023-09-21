export interface IServicesData {
  title: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  features: Array<{
    title: string;
    text: string;
  }>;
  description: {
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    text: string;
  };
}
