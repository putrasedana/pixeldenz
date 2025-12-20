interface Component {
  slug: string;
  name: string;
  category: string;
  previewImage: string;
  componentCode: string;
}

const componentsData: Component[] = [
  {
    slug: "button-primary",
    name: "Primary Button",
    category: "button",
    previewImage: "/assets/components/button-primary.webp",
    componentCode:
      '<PrimaryButton variant="primary" size="lg" onClick={() => console.log(\'Clicked\')}>Get Started</PrimaryButton>',
  },
];
