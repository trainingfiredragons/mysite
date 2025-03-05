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
    console.log("ran listeners")
}
// ?!?!?!? ▲ KEYBINDS ▲ ?!?!?!?

// x ▼ x ▼ x
function updateRotation() {
    let root = document.documentElement;
    let currentRotation = parseFloat(getComputedStyle(root).getPropertyValue('--rotation'));
    root.style.setProperty('--rotation', (currentRotation + 0.5) % 360 + 'deg');
}
function updateHueRotation() {
    let root = document.documentElement;
    let currentRotation = parseFloat(getComputedStyle(root).getPropertyValue('--hueRotation'));
    let currentInverseRotation = parseFloat(getComputedStyle(root).getPropertyValue('--inverseHueRotation'));
    let mRandVal = Math.random()
    root.style.setProperty('--hueRotation', (currentRotation + 0.5) % 360 + 'deg');
    root.style.setProperty('--inverseHueRotation', (currentInverseRotation - 0.5) % 360 + 'deg');
}

// x ▲ x ▲ x
