window.addEventListener("load", () => {
    document.getElementById("go").addEventListener("click", () => {
        const params = new URLSearchParams(window.location.search)

        const run = params.get("run")
        const text = params.get("text")

        if (!run) return;

        const url = `shortcuts://run-shortcut?name=AppleInjector&input=text&text=${encodeURIComponent(run)},${encodeURIComponent(text)}`;

        window.location.href = url;
        console.log(url)
    })
})