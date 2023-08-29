// import React from "react";
// import ReactDOM from "react-dom";
// import styled, { css } from "styled-components";
// import { Interpolation, Styles, RuleSet } from "styled-components/dist/types";

// type cssProperties = [string, string];

// const media = {
//     desktop: (...args: Styles<object>[]) => css`
//     @media (min-width: 870px) {
//       ${css(...args)};
//     }
//   `
// };

// const Footer = styled.footer`
//   font-family: nunito-sans, sans-serif;
//   text-align: center;
//   ${media.desktop`
//     text-align: left;
//   `}
// `;

// const TopBar = styled.div`
//   margin: auto;
//   max-width: 1280px;
//   padding: 40px 0;
//   ${media.desktop`
//     padding: 45px 80px;
//     display: flex;
//     flex-flow: row;
//     justify-content: space-between;
//   `}
// `;

// const GetTheApp = styled.div`
//   font-size: 18px;
//   font-weight: 900;
//   line-height: 1.11;
//   color: #2b2738;
//   margin: 0 -15px;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   ${media.desktop`
//     flex-wrap: nowrap;
//     align-items: center;
//     white-space: nowrap;
//   `}
// `;

// const GetTheAppTitle = styled.div`
//   margin-bottom: 4px;
//   width: 100%;
//   ${media.desktop`
//     width: unset;
//     margin: 0 15px;
//   `}
// `;

// const AppStoreApp = styled.img`
//   width: 189px;
//   height: 63px;
//   margin: 16px auto;
//   padding: 0 20px;
//   ${media.desktop`
//     padding: 0;
//     margin: 0 8px;
//   `}
// `;

// const GoogleApp = styled.img`
//   width: 189px;
//   height: 63px;
//   margin: 16px auto;
//   padding: 0 20px;
//   ${media.desktop`
//     padding: 0;
//     margin: 0 8px;
//   `}
// `;

// const DesktopSocialList = styled.div`
//   display: none;
//   ${media.desktop`
//     display: flex;
//     align-items: center;
//   `};
// `;

// const MobileSocialList = styled.div`
//   padding-bottom: 40px;
//   width: 100%;
//   ${media.desktop`
//     display: none;
//   `};
// `;

// const Twitter = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const Facebook = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const Instagram = styled.svg`
//   border: 1px lightgray solid;
//   width: 33px;
//   height: 33px;
//   margin-left: 5px;
// `;

// const HR = styled.div`
//   display: none;
//   ${media.desktop`
//     height: 0;
//     padding: 0;
//     margin: 0;
//     display: block;
//     border-bottom: 1px #cacada solid;
//   `};
// `;

// const BottomBar = styled.div`
//   max-width: 1280px;
//   margin: auto;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   ${media.desktop`
//     flex-wrap: nowrap;
//     padding: 40px 80px 60px;
//     justify-content: space-between;
//   `};
// `;

// const Menu = styled.div`
//   margin-bottom: 30px;
//   min-width: 50%;
//   ${media.desktop`
//     min-width: unset;
//     margin-bottom: 0;
//     margin-right: 40px;
//   `}
// `;

// const MenuHead = styled.div`
//   margin-bottom: 10px;
//   font-size: 18px;
//   font-weight: 900;
//   line-height: 1.11;
//   color: #2b2738;
// `;

// const MenuLink = styled.a`
//   display: block;
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 2;
//   color: #2f6cb3;
//   ${media.desktop`
//     white-space: nowrap;
//   `}
// `;

// const Policy = styled.div`
//   width: 100%;
//   max-width: 764px;
//   font-size: 12px;
//   line-height: 1.33;
//   color: #2b2738;
//   margin: 0 20px;
// `;

// const PolicyRow = styled.p`
//   margin: 0;
//   padding: 0;
//   padding-bottom: 20px;
// `;

// const menu = [
//     {
//         name: "DecimalAt Guides",
//         links: [
//             { title: "Rough Around The Edges", url: "www.decimal-at.com" },
//             { title: "Xtend Barre", url: "www.decimal-at.com" },
//             { title: "600 Seconds", url: "www.decimal-at.com" },
//             { title: "Yoga52", url: "www.decimal-at.com" }
//         ]
//     },
//     {
//         name: "About Us",
//         links: [
//             { title: "About decimal At", url: "www.decimal-at.com" },
//             { title: "Help and Feedback", url: "www.decimal-at.com" },
//             { title: "Terms and Condition", url: "www.decimal-at.com" },
//             { title: "Privacy Policy", url: "www.decimal-at.com" },
//             { title: "FAQ", url: "www.decimal-at.com" }
//         ]
//     }
// ];

// const SocialList = () => (
//     <>
//         <Twitter />
//         <Facebook />
//         <Instagram />
//     </>
// );

// function App() {
//     return (
//         <Footer>
//             <TopBar>
//                 <GetTheApp>
//                     <GetTheAppTitle> Get The App</GetTheAppTitle>
//                     <AppStoreApp />
//                     <GoogleApp />
//                 </GetTheApp>
//                 <DesktopSocialList>
//                     <SocialList />
//                 </DesktopSocialList>
//             </TopBar>
//             <HR />
//             <BottomBar>
//                 {menu.map(({ name, links }) => (
//                     <Menu>
//                         <MenuHead>{name}</MenuHead>
//                         {links.map(({ title, url }) => (
//                             <MenuLink href={url}>{title}</MenuLink>
//                         ))}
//                     </Menu>
//                 ))}
//                 <MobileSocialList>
//                     <SocialList />
//                 </MobileSocialList>
//                 <Policy>
//                     <PolicyRow>© 2023 Deciaml At, LLC. All rights reserved.</PolicyRow>
//                     <PolicyRow>
//                         +Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo sit esse, facilis ipsa perspiciatis laudantium. Amet animi nemo eveniet odit repellendus, sit maiores ratione vero expedita, error minima voluptatem.
//                     </PolicyRow>
//                     <PolicyRow>
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illo quaerat culpa deserunt, sequi repellat adipisci accusamus voluptate voluptatibus ipsum blanditiis doloremque doloribus aliquam esse suscipit asperiores, error placeat repudiandae.
//                     </PolicyRow>
//                     <PolicyRow>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi eos ut ipsum mollitia itaque provident ipsa aliquid placeat labore praesentium assumenda ullam culpa est voluptate, animi non eaque at.
//                     </PolicyRow>
//                 </Policy>
//             </BottomBar>
//         </Footer>
//     );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright © DecimalAT ${year}`}</footer>;
};

export default Footer;