let main = document.getElementById("main");
let status =
{
    target: null
}

main.addEventListener("mousedown", event =>
{
    if (event.target && event.target.classList.contains("stones") && event.target.getAttribute("value") == "on")
    {
        event.target.style.cursor = "none";
        status.target = event.target;
        status.offsetX = event.offsetX;
        status.offsetY = event.offsetY;
    }
});

main.addEventListener("mouseup", () =>
{
    event.target.style.cursor = "default";
    status.target = null;
});

main.addEventListener("mousemove", e =>
{
    if (status.target)
    {
        status.target.style.left = (e.pageX - status.offsetX) + "px";
        status.target.style.top = (e.pageY - status.offsetY) + "px";
    }
});

main.addEventListener("dblclick", event =>
{
    if (event.target && event.target.classList.contains("stones"))
    {
        if (event.target.getAttribute("value") == "on")
        {
            event.target.setAttribute("value", "off");
        }
        else
        {
            event.target.setAttribute("value", "on");
        }
    }
});
