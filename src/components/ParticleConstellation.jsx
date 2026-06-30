import { useEffect, useRef } from 'react';

export default function ParticleConstellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let doodles = [];
    const colors = [
      'rgba(79, 190, 255, 0.35)',  // Cornflower
      'rgba(242, 97, 16, 0.25)',   // Tangerine
      'rgba(149, 82, 224, 0.25)',  // Amethyst
      'rgba(187, 153, 21, 0.25)',   // Mustard
    ];
    
    const mouse = { x: null, y: null, radius: 100 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDoodles();
    };

    class Doodle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        
        // Random size and speeds
        this.size = Math.random() * 20 + 15; // 15px to 35px
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        
        // Pick doodle type: 0=blob, 1=star, 2=cloud, 3=plane, 4=cross
        this.type = Math.floor(Math.random() * 5);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.strokeColor = 'rgba(83, 88, 98, 0.15)'; // Muted Stone line stroke
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.lineWidth = 1.5;

        if (this.type === 0) {
          // Soft Blob
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } 
        else if (this.type === 1) {
          // Twinkling Star (4-point)
          ctx.beginPath();
          ctx.strokeStyle = '#535862'; // Stone stroke
          ctx.globalAlpha = 0.3;
          const rInner = this.size / 4;
          const rOuter = this.size / 2;
          for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos(this.angle + (i * Math.PI) / 2) * rOuter, Math.sin(this.angle + (i * Math.PI) / 2) * rOuter);
            ctx.lineTo(Math.cos(this.angle + (i * Math.PI) / 2 + Math.PI / 4) * rInner, Math.sin(this.angle + (i * Math.PI) / 2 + Math.PI / 4) * rInner);
          }
          ctx.closePath();
          ctx.stroke();
        } 
        else if (this.type === 2) {
          // Puffy Cloud
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.strokeStyle = this.strokeColor;
          ctx.globalAlpha = 0.5;
          const r = this.size / 3;
          ctx.arc(-r, 0, r, Math.PI * 0.5, Math.PI * 1.5);
          ctx.arc(0, -r * 0.8, r * 1.2, Math.PI * 1.0, Math.PI * 2.0);
          ctx.arc(r, 0, r, Math.PI * 1.5, Math.PI * 0.5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } 
        else if (this.type === 3) {
          // Paper Plane
          ctx.beginPath();
          ctx.strokeStyle = '#535862';
          ctx.globalAlpha = 0.25;
          const w = this.size / 2;
          ctx.moveTo(-w, -w/2);
          ctx.lineTo(w, 0);
          ctx.lineTo(-w/3, w/2);
          ctx.lineTo(-w, -w/2);
          ctx.moveTo(-w/3, w/2);
          ctx.lineTo(-w/2, w/3);
          ctx.lineTo(w, 0);
          ctx.stroke();
        } 
        else {
          // Cute Little Cross
          ctx.beginPath();
          ctx.strokeStyle = '#535862';
          ctx.globalAlpha = 0.3;
          const l = this.size / 3;
          ctx.moveTo(-l, 0);
          ctx.lineTo(l, 0);
          ctx.moveTo(0, -l);
          ctx.lineTo(0, l);
          ctx.stroke();
        }

        ctx.restore();
      }

      update() {
        // Slow rotation drift
        this.angle += this.rotationSpeed;

        // Interaction: drift away from mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            
            // Push away from pointer
            this.x -= dirX * force * 2.5;
            this.y -= dirY * force * 2.5;
          }
        }

        // Return to base coordinates slowly (drift)
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        this.x += dxBase * 0.02 + this.vx;
        this.y += dyBase * 0.02 + this.vy;

        // Keep inside screen bounds
        if (this.x < -50 || this.x > canvas.width + 50) this.vx = -this.vx;
        if (this.y < -50 || this.y > canvas.height + 50) this.vy = -this.vy;
      }
    }

    const initDoodles = () => {
      doodles = [];
      const density = Math.floor((canvas.width * canvas.height) / 25000);
      const cap = Math.min(density, 45); // Spaced-out confettis
      
      for (let i = 0; i < cap; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        doodles.push(new Doodle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle warm-to-cool pastel lighting gradient on top of background wash
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#ebf5ff'); // Sky Wash
      grad.addColorStop(1, '#f3f8ff'); // Whisper cooler blue
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < doodles.length; i++) {
        doodles[i].update();
        doodles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#ebf5ff]"
    />
  );
}
