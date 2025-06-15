export function setupFocusFix(canvasSelector = "canvas") {
    const canvas = document.querySelector(canvasSelector) as HTMLCanvasElement;

    if (!canvas) {
        console.warn("[FocusFix] Canvas not found");
        return;
    }

    // Сделать canvas фокусируемым
    canvas.setAttribute("tabindex", "0");

    // Фокус при загрузке
    window.addEventListener("load", () => {
        canvas.focus();
    });

    // Фокус при возврате на вкладку
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            canvas.focus();
        }
    });

    // Фокус при клике в любом месте страницы — если фокус ушёл
    canvas.addEventListener("blur", () => {
        canvas.focus();
    });
}