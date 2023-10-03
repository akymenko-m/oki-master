export interface IServicesData {
  id: string;
  title: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  icon: string;

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
