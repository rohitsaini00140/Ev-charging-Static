export const menuList = [
    {
        name: "Home",
        // icon: <DashboardIcon />,
        path: "/"
    },
    {
        name: "About",
        // icon: <ViewCarouselIcon />,
        path: "/about"
    },
    {
        name: "Our Business",
        // icon: <LocalOfferIcon />,
        arr: [
            {
                name: "Ayurveda",
                path: "/ourBusiness/ayurveda",
            },
            {
                name: "Nutraceutical",
                path: "/ourBusiness/Nutraceutical",
            }
        ]
    },
    {
        name: "Products",
        // icon: <CategoryIcon />,
        arr: [
            {
                name: "Patent Medicine",
                path: "/products/patentMedicine",
            },
            {
                name: "Classical Medicine",
                path: "/products/classicalMedicine",
            },
            {
                name: "Pure Herbs",
                path: "/products/pureHerbs",
            }
        ]
    },
    {
        name: "Operations",
        // icon: <NoteIcon />,
        path: "/operations",
    },
    {
        name: "Contact Us",
        // icon: <LogoutIcon />,
        path: "/contactUs",
    }
]