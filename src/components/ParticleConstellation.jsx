import { useEffect, useRef } from 'react';

export default function ParticleConstellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const colors = ['#8052ff', '#ffb829', '#15846e', '#ffffff']; // Plum Voltage, Amber Spark, Lichen, Bone
    
    // Mouse coords
    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle constructor
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // Keep primitives tiny (1px to 4px)
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random drift speeds
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        
        // Primitive type: 0 = circle, 1 = triangle, 2 = diamond
        this.type = Math.floor(Math.random() * 3);
        
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 15;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        if (this.type === 0) {
          // Circle
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        } else if (this.type === 1) {
          // Triangle
          const h = this.size * (Math.sqrt(3)/2);
          ctx.moveTo(this.x, this.y - h/2);
          ctx.lineTo(this.x - this.size/2, this.y + h/2);
          ctx.lineTo(this.x + this.size/2, this.y + h/2);
          ctx.closePath();
        } else {
          // Diamond
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.lineTo(this.x - this.size, this.y);
          ctx.closePath();
        }
        
        ctx.fill();
      }

      update() {
        // Simple mouse interaction (magnetic cluster / push)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Attract to mouse with custom intensity
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            
            // Cluster slightly around the cursor
            this.x += directionX * force * 1.5;
            this.y += directionY * force * 1.5;
          }
        }

        // Return to base coordinates slowly (drift offset)
        let dxBase = this.baseX - this.x;
        let dyBase = this.baseY - this.y;
        this.x += dxBase * 0.05 + this.vx;
        this.y += dyBase * 0.05 + this.vy;

        // Keep inside window bounds
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 3500);
      const cappedParticles = Math.min(numberOfParticles, 600); // capped for performance
      
      for (let i = 0; i < cappedParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Render constellation connectors (very faint hairlines if particles are close)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Connect nearby nodes with low alpha hairline connections
          if (dist < 60) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(189, 189, 189, ${0.12 * (1 - dist/60)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#000000]"
    />
  );
}
