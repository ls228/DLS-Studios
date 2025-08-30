import React, { useRef, useEffect } from "react";

const MaskedTextVideo = ({ videoSrc, line1 = "DLS", line2 = "Studios" }) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    video.play();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Textgrößen
      const bigFontSize = canvas.width * 0.41;
      const smallFontSize = canvas.width * 0.22;
      const lineSpacing = bigFontSize * 0.6; // Abstand zwischen den Zeilen

      // Berechne Text-Metriken
      ctx.font = `bold ${bigFontSize}px Arial`;
      const line1Width = ctx.measureText(line1).width;
      const line1Height = bigFontSize;

      ctx.font = `bold ${smallFontSize}px Arial`;
      const line2Width = ctx.measureText(line2).width;
      const line2Height = smallFontSize;

      const textBoxWidth = Math.max(line1Width, line2Width);
      const textBoxHeight = line1Height + line2Height + lineSpacing;

      // Maske erstellen
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";

      // Große Zeile
      ctx.font = `bold ${bigFontSize}px Arial`;
      ctx.fillText(line1, canvas.width / 2, canvas.height / 2 - lineSpacing / 2);

      // Kleine Zeile
      ctx.font = `bold ${smallFontSize}px Arial`;
      ctx.fillText(line2, canvas.width / 2, canvas.height / 2 + lineSpacing / 2);

      // Video nur innerhalb Text
      ctx.globalCompositeOperation = "source-in";

      // Video proportional zur Text-Bounding-Box skalieren
      const videoAspect = video.videoWidth / video.videoHeight;
      let drawWidth, drawHeight;

      if (textBoxWidth / textBoxHeight > videoAspect) {
        drawWidth = textBoxWidth;
        drawHeight = drawWidth / videoAspect;
      } else {
        drawHeight = textBoxHeight;
        drawWidth = drawHeight * videoAspect;
      }

      const offsetX = canvas.width / 2 - drawWidth / 2;
      const offsetY = canvas.height / 1.9 - drawHeight / 2;

      ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);

      ctx.restore();

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [line1, line2]);

  return (
    <>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ display: "none" }}
        muted
        loop
        autoPlay
        playsInline
      />
      <canvas ref={canvasRef} />
    </>
  );
};

export default MaskedTextVideo;
