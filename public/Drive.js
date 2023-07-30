const driver = window.driver.js.driver
const config = {
  showButtons: ["next", "previous"],
  steps: [
    {
      element: "xxxx",
      popover: {
        title: "About this site",
        description:
          "This is a visual copy of the Tesla website. It was made with a <b>responsive design</b> in mind, so different <i><b>.avif</b></i> and <i><b>.webp</b></i> images are loaded depending on the screen size and format browser support.",
        onNextClick: () => {
          if (window.innerWidth > 1280) window.location.href = "#Model3"
          driverObj.moveNext()
        },
      },
    },
  ],
}
let menuside = () => {
  document.getElementById("menu.button").click()
}
openSideMenuAndMoveNext = () => {
  openSideMenu()
  // setTimeout(driverObj.moveNext(),1000)
  driverObj.moveNext()
}
if (window.innerWidth > 1280) {
  config.steps.push({
    element: "nav", // #navs-drive-step
    popover: {
      title: "Hover effect on the header buttons",
      description:
        "This effect is achieved by emulating the hover with an element that takes the position and width of the nav buttons with <i><b>mouseenter</b></i> and <i><b>mouseleave</b></i>.",
    },
  })
  config.steps.push({
    element: "nav:nth-of-type(2)",
    popover: {
      title: "Hover effect on the header buttons",
      description:
        'An <i>eventListener</i> is added to all buttons through a loop after getting them with <i>querySelectorAll</i> so the "hover element" can move from one column of buttons to the other too.',
      onNextClick: openSideMenuAndMoveNext,
    },
  })
} else {
  config.steps.push({
    element: "xxxx",
    popover: {
      title: "Hover effect on the header buttons",
      description: "In order to view this effect, please open this site on a <b>desktop browser</b>.",
      onNextClick: openSideMenuAndMoveNext,
    },
  })
}
config.steps.push({
  element: "#menu",
  popover: {
    title: "",
    description: "Side menu",
  },
})
config.steps.push({
  element: "#language-selector",
  popover: {
    title: "Language selector",
    description:
      "When the webpage loads, <i>the language is set</i> to the browser's language, and you can also change it here. The webpage was translated in some languages and compiled in <b>build time</b> with Astro.",
    onNextClick: () => {
      closeSideMenu()
      driverObj.moveNext()
    },
  },
})
config.steps.push({
  element: "#socials",
  popover: {
    title: "Check out my socials",
    description:
      "I love to keep me updated and comment on the state of the art through Twitter and LinkedIn, so feel free to follow me there!",
  },
})

const driverObj = driver(config)
