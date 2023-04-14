export const openMenu = (state, ref) => {
    setstate(toggle => !toggle)
    state ? ref.current.className = "menu2" : ref.current.className = "menu"
  }