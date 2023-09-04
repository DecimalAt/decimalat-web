import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macrosPlugin from 'vite-plugin-babel-macros'
import reactRefresh from '@vitejs/plugin-react-refresh';


// https://vitejs.dev/config/
export default defineConfig(

  ({ command, mode, ssrBuild }) => {
    if (command === 'serve') {
      return {
        // dev specific config
        // build: {
        //   sourcemap: true,
        //   minify: false,
        // },
        // plugins: [
        //   react({
        //     plugins: [
        //       [
        //         'babel-plugin-styled-components',
        //         {
        //           displayName: true,
        //           fileName: false
        //         }
        //       ]
        //     ]
        //   })
        // ]


        build: {
          sourcemap: true,
          minify: false,
        },
        plugins: [
          react({
            babel: {
              plugins: [
                [
                  'babel-plugin-styled-components',
                  {
                    displayName: true,
                    fileName: false
                  }
                ]
              ]
            }
          }),
          reactRefresh(),
          macrosPlugin(),
        ],
      }
    } else {
      // command === 'build'
      return {
        // build specific config
      }
    }
  }

  // {
  // build: {
  //   sourcemap: true,
  // },
  // plugins: [
  //   //react(),
  //   // react({
  //   //   babel: {
  //   //     presets: ['@babel/preset-typescript'],
  //   //     plugins: [
  //   //       '@babel/plugin-transform-typescript',
  //   //       [
  //   //         'babel-plugin-styled-components',
  //   //         {
  //   //           ssr: false,
  //   //           pure: true,
  //   //           displayName: true,
  //   //           fileName: false,
  //   //           meaninglessFileNames: ["index", "styles"],
  //   //         },
  //   //       ],
  //   //     ],
  //   //   },
  //   // }),
  //   react({
  //     babel: {
  //       plugins: [
  //         [
  //           'babel-plugin-styled-components',
  //           {
  //             displayName: true,
  //             fileName: false
  //           }
  //         ]
  //       ]
  //     }
  //   }),
  //   reactRefresh(),
  //   macrosPlugin(),
  // ],
  // //base: '/decimalat-web/'
  // }
)
