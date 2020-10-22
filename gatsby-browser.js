const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://gumroad.com/js/gumroad.js")
    addScript(
      "https://assets.gumroad.com/assets/gumroad-overlay-5cd5fa5aa7830f92ada5da442cddac61faef15f0bd3f5695d7e17d8cbc24175e.js"
    )
  }
}
