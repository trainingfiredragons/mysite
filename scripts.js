// x ▼ x ▼ x
// x ▲ x ▲ x
  // ▼ x ▼ //
  // ▲ x ▲ //

// `*`*`*` ▼ COLORS ▼ `*`*`*`
function changeColorScheme() {
    let root = document.documentElement;
    let currentScheme = getComputedStyle(root).getPropertyValue('color-scheme');
    (currentScheme == "light only" ? root.style.setProperty('color-scheme', "dark only") : root.style.setProperty('color-scheme', "light only"))
}
// `*`*`*` ▲ COLORS ▲ `*`*`*`

// ?!?!?!? ▼ KEYBINDS ▼ ?!?!?!?
function addListeners() {
  if(window.alreadyAddedEnterTriggerListenerForQ === undefined) {
      window.addEventListener('keydown', function(e){ 
          if(e.which === 81) { 
              changeColorScheme()
          }; 
      }); window.alreadyAddedEnterTriggerListenerForQ = true;
  };
  if(window.alreadyAddedEnterTriggerListenerForE === undefined) {
    window.addEventListener('keydown', function(e){ 
        if(e.which === 69) { 
            playSlide()
        }; 
    }); window.alreadyAddedEnterTriggerListenerForE = true;
  };
  if(window.alreadyAddedEnterTriggerListenerForR === undefined) {
    window.addEventListener('keydown', function(e){ 
        if(e.which === 82) { 
            changeContent()
        }; 
    }); window.alreadyAddedEnterTriggerListenerForR = true;
  };
  if(window.alreadyAddedGeneralListeners === undefined) {
    window.addEventListener('keydown', function(e) {
      if(e) {
        //console.log(e.keyCode)
      }
    });
    window.alreadyAddedGeneralListeners = true;
  };
  console.log("ran listeners")
}
// ?!?!?!? ▲ KEYBINDS ▲ ?!?!?!?

// [][][][ ▼ ARRAYS ▼ ][][][]
let tabDataList = [
  {
    buttonTitle:"main",
    title:"main title",
    content:`<br><br><br><afont style="font-family:Indie Flower;">
    <table>
      <caption>Keybinds</caption>
      <tbody>
        <tr>
          <td><b>Q:</b> Light/Dark Mode Toggle</td>
        </tr>
        <tr>
          <td><b>E:</b> Quick Access Menu</td>
        </tr>
        <tr>
          <td><b>R:</b> Screen Slider</td>
        </tr>
      </tbody>
    </table>
    </afont>`,
    hotbar: `<afont style="font-family: Indie Flower">my caption</afont>`
  }, 
  {
    buttonTitle:"Cat",
    title:"Cat",
    hotbar: `<afont style="font-family:Indie Flower">This is a picture of a cat.&nbsp;&nbsp;Cats are usually very fluffy and make excellent house pets.</afont>`,
    backgroundImage:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
  },
  {
    buttonTitle:"Mountains",
    title:"Mountains",
    hotbar:`<afont style="font-family:Marck Script">A picture of the mountains.</afont>`,
    backgroundImage:"https://i.imgur.com/64c6NnI.jpg",
  }
];
// [][][][ ▲ ARRAYS ▲ ][][][]

// <><><>< ▼ RANDOM STUFF ??? ▼ ><><><>

function createTabButtons(tabCollectionList) {
    if (!tabCollectionList) tabCollectionList = tabDataList;
    function createDiv(divInfo) {
      let newDiv = document.createElement("div");
      newDiv.className = "sidebarButton interfaceButton unselectable"
      newDiv.innerHTML += (divInfo.buttonTitle !== undefined ? divInfo.buttonTitle : (divInfo.title !== undefined ? divInfo.title : 'unknown'))
      if(newDiv.alreadyAddedEventTriggerListenerForDocumentMouseClick === undefined) {
        newDiv.addEventListener('click', function(e){ 
          changeContent()
          setTimeout(() => {
            setContent(divInfo)
          }, 299);
        });
        newDiv.alreadyAddedEventTriggerListenerForDocumentMouseClick = true;
      };
      console.log(newDiv)
      return newDiv
    }
    sidebarButtons.innerHTML = ''
    for (let i of tabCollectionList) {
      let myDiv = createDiv(i)
      sidebarButtons.appendChild(myDiv)
    };
    setContent(tabCollectionList[0])
    return ''
};
function setContent(contentData) {
  document.title = (contentData.title !== undefined ? contentData.title : 'unknown');
  hotbar.innerHTML = (contentData.hotbar !== undefined ? contentData.hotbar : 'no page data');
  content_right.style.backgroundImage = 'url('+(contentData.backgroundImage !== undefined ? contentData.backgroundImage : "")+')';
  content_right.innerHTML = (contentData.content !== undefined ? contentData.content : 'my words');
}

function displayInventoryTab(tabName) {
  inventoryTabName.classList.remove("currentTab");
  bestiaryTabName.classList.remove("currentTab");
  tabName.classList.add("currentTab");
  main_display_menu.innerHTML = tabName.id
};

function playSlide() {
  let sb = document.getElementById("sidebar");
  let sbs = document.getElementById("sidebar_shadow");
  if (sb.classList.contains("animation_extendSidebar")) {

    sidebar.classList.remove("animation_extendSidebar");
    sidebar.classList.add("animation_removeSidebar");
    sidebar_shadow.classList.remove("animation_extendSidebarDarken");
    sidebar_shadow.classList.add("animation_removeSidebarDarken");

  } else if (sb.classList.contains("animation_removeSidebar")) {
    
    sidebar.classList.remove("animation_removeSidebar");
    sidebar.classList.add("animation_extendSidebar");
    sidebar_shadow.classList.remove("animation_removeSidebarDarken");
    sidebar_shadow.classList.add("animation_extendSidebarDarken");
    //sidebar_shadow.classList.replace("animation_removeSidebarDarken", "animation_extendSidebarDarken");
  } else {
    sidebar.classList.add("animation_extendSidebar");
    sidebar_shadow.classList.add("animation_extendSidebarDarken");
  }
}
function changeContent() {
  let msb = document.getElementById("maincontent_slider");
  if (msb.alreadyAddedAnimationListener === undefined) {
    maincontent_slider.addEventListener('animationend', () => {
      console.log('animation ended')
      maincontent_slider.classList.remove("animation_mainContentSlide");
    });
    maincontent_slider.alreadyAddedAnimationListener = true;
  }
  if (msb.classList.contains("animation_mainContentSlide")) {
    console.log('wait')
  } else {
    maincontent_slider.classList.add("animation_mainContentSlide")
  }
  console.log('content');
}
// <><><>< ▲ RANDOM STUFF ??? ▲ ><><><>
