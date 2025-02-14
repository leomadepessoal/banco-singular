
export interface Brand {
  name: string;
  link: string;
  logoUrl: string;
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
    link: "https://drive.google.com/drive/folders/1FTW9qkum3Cr0aQjwyWm9vczTp0Ng43c8?usp=drive_link",
    logoUrl: "https://logovtor.com/wp-content/uploads/2021/02/nuna-intl-bv-logo-vector.png",
  },
  {
    name: "JOIE",
    link: "https://drive.google.com/drive/folders/16Md6PY2nzdYn2QRKnfs2PCUMMGzXpC0Y?usp=drive_link",
    logoUrl: "https://dd.joiebaby.com/media/logo/default/Joie-Logo.png",
  },
  {
    name: "MINIKOIOI",
    link: "https://drive.google.com/drive/folders/1AxGnV2_StmN8wXjMzqZ2Vp-Gf8Ths_XJ?usp=drive_link",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRoHEl4HrzDammhrL0etrk29hdTm-Jeceig&s",
  },
  {
    name: "PREMIUM BABY",
    link: "https://drive.google.com/drive/folders/1Niqc0o68Ehj0HY5pqOo215xCnhDkhIMB?usp=drive_link",
    logoUrl: "https://premiumbabybrasil.com.br/media/theme_options/default/logoPremiumBaby.png",
  },
];

export const catalogSection: Brand[] = [
  {
    name: "NUNA",
    link: "https://drive.google.com/file/d/16tFywCEvImRo2mItaWXVI854sGoJaqOH/view?usp=sharing",
    logoUrl: "https://logovtor.com/wp-content/uploads/2021/02/nuna-intl-bv-logo-vector.png",
  },
  {
    name: "JOIE",
    link: "https://drive.google.com/file/d/1Q1C-3j7OTfe94ZtHzaByEjwXiMmeRCHY/view?usp=sharing",
    logoUrl: "https://dd.joiebaby.com/media/logo/default/Joie-Logo.png",
  },
  {
    name: "MINIKOIOI",
    link: "https://drive.google.com/file/d/1tf7tStsWSFqAigw_aW4Hno4dX7Gxsr95/view?usp=sharing",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRoHEl4HrzDammhrL0etrk29hdTm-Jeceig&s",
  },
  {
    name: "PREMIUM BABY",
    link: "https://drive.google.com/file/d/1N3NDa8cLc_2hRXlA4Z1hkogV3YCgH9Rv/view?usp=sharing",
    logoUrl: "https://premiumbabybrasil.com.br/media/theme_options/default/logoPremiumBaby.png",
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
    title: "Marketing - Material Para Clientes",
    path: "https://drive.google.com/drive/folders/1SQQDkJOhFOi9vuC5cdMh1v39B0qEeuNr",
    iconUrl: "https://www.drawhipo.com/wp-content/uploads/2023/04/Marketing-Color-29-Socialmedia.png",
  },
  {
    title: "CAMPANHAS / PROMOÇÃO",
    path: "https://drive.google.com/drive/folders/1SIrAQYlG78K07txb6hG0EqZ3uDquS9yE?usp=drive_link",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5673/5673350.png",
  },
  {
    title: "PMA",
    path: "/pma",
    iconUrl: "https://static.vecteezy.com/ti/vetor-gratis/p1/20274220-preco-tag-icone-para-seu-local-na-rede-internet-projeto-logotipo-aplicativo-ui-gratis-vetor.jpg",
    brands: [
      {
        name: "PMA",
        link: "https://drive.google.com/file/d/1WCtSocnzbMTlXNxpj_St0PNQHGT4c7xq/view?usp=sharing",
        logoUrl: "https://singularbaby.com.br/media/Logo_Oficial_Singular.png",
      },
      {
        name: "Normas PMA",
        link: "https://drive.google.com/file/d/1W4tYP4b-8a7vIvXa4wOiXKHCKNiokRKb/view?usp=drive_link",
        logoUrl: "https://cdn-icons-png.flaticon.com/512/7505/7505111.png",
      },
    ],
  },
];
