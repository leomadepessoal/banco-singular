
export interface Brand {
  name: string;
  link: string;
  logoUrl: string;
  requiresPassword?: boolean;
}

export interface Section {
  title: string;
  path: string;
  iconUrl?: string;
  brands?: Brand[];
}

export const technicalSection: Brand[] = [
  {
    name: "NUNA",
    link: "#",
    logoUrl: "https://logovtor.com/wp-content/uploads/2021/02/nuna-intl-bv-logo-vector.png",
  },
  {
    name: "JOIE",
    link: "#",
    logoUrl: "https://dd.joiebaby.com/media/logo/default/Joie-Logo.png",
  },
  {
    name: "MINIKOIOI",
    link: "#",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRoHEl4HrzDammhrL0etrk29hdTm-Jeceig&s",
  },
  {
    name: "PREMIUM BABY",
    link: "#",
    logoUrl: "https://premiumbabybrasil.com.br/media/theme_options/default/logoPremiumBaby.png",
  },
];

export const catalogSection: Brand[] = [
  {
    name: "NUNA",
    link: "#",
    logoUrl: "https://logovtor.com/wp-content/uploads/2021/02/nuna-intl-bv-logo-vector.png",
  },
  {
    name: "JOIE",
    link: "#",
    logoUrl: "https://dd.joiebaby.com/media/logo/default/Joie-Logo.png",
  },
  {
    name: "MINIKOIOI",
    link: "#",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRoHEl4HrzDammhrL0etrk29hdTm-Jeceig&s",
  },
  {
    name: "PREMIUM BABY",
    link: "#",
    logoUrl: "https://premiumbabybrasil.com.br/media/theme_options/default/logoPremiumBaby.png",
  },
];

export const marketingSection: Brand[] = [
  {
    name: "Marketing",
    link: "#",
    logoUrl: "https://e7.pngegg.com/pngimages/855/25/png-clipart-digital-marketing-online-advertising-computer-icons-taekwondo-elements-service-logo-thumbnail.png",
  },
];

export const campanhasSection: Brand[] = [
  {
    name: "Campanhas",
    link: "#",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/1312/1312285.png",
  },
];

export const sections: Section[] = [
  {
    title: "Catálogos",
    path: "/catalogs",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9453/9453183.png",
    brands: catalogSection,
  },
  {
    title: "Banco de Imagens e Fichas Técnicas",
    path: "/technical",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4296/4296573.png",
    brands: technicalSection,
  },
  {
    title: "Marketing",
    path: "/marketing",
    iconUrl: "https://e7.pngegg.com/pngimages/855/25/png-clipart-digital-marketing-online-advertising-computer-icons-taekwondo-elements-service-logo-thumbnail.png",
    brands: marketingSection,
  },
  {
    title: "Campanhas",
    path: "/campanhas",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1312/1312285.png",
    brands: campanhasSection,
  },
  {
    title: "PMA",
    path: "/pma",
    iconUrl: "https://static.vecteezy.com/ti/vetor-gratis/p1/20274220-preco-tag-icone-para-seu-local-na-rede-internet-projeto-logotipo-aplicativo-ui-gratis-vetor.jpg",
    brands: [
      {
        name: "PMA",
        link: "#",
        logoUrl: "https://singularbaby.com.br/media/Logo_Oficial_Singular.png",
      },
      {
        name: "Normas PMA",
        link: "#",
        logoUrl: "https://cdn-icons-png.flaticon.com/512/7505/7505111.png",
      },
    ],
  },
];
