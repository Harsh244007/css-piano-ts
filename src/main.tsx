document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<div class="wrapper">
<div class="white-keys">
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
</div>
<div class="black-keys">
<div class="black"></div>
<div class="black"></div>
<div class="black empty"></div>
<div class="black"></div>
<div class="black"></div>
<div class="black"></div>
</div>
<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #998235;
  height: 100vh;
  overflow: hidden;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  overflow: hidden;
  display: flex;
  place-items: center;
  place-content: center;
}
#root * {
  box-sizing: border-box;
}
.wrapper {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.black-keys {
  position: absolute;
  top: 37%;
  left: 68px;
  display: flex;
  gap: 15px;
  align-items: stretch;
  height: 50px;
}
.white-keys {
  display: flex;
  gap: 5px;
  align-items: stretch;
  height: 100px;
  background-color: black;
  padding: 6px;
  padding-top: 30px;
  border-radius: 10px;
}
.white {
  background: white;
  width: 25px;
  border-radius: 5px;
}
.black {
  background: #191919;
  width: 15px;
}
.empty {
  background: none;
}
</style>
</div>`;
