import React, { useEffect, useRef } from 'react';

export default function HeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    // Nodes defining the 'P' Mesh based on the brand logo
    const getNodes = () => {
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.38;

      return [
        // Outer P Frame
        { x: cx - scale * 0.5, y: cy - scale * 0.7, id: 'top-left' },
        { x: cx + scale * 0.4, y: cy - scale * 0.7, id: 'top-right' },
        { x: cx + scale * 0.7, y: cy - scale * 0.2, id: 'mid-right' },
        { x: cx + scale * 0.4, y: cy + scale * 0.2, id: 'mid-in' },
        { x: cx - scale * 0.1, y: cy + scale * 0.2, id: 'stem-in' },
        { x: cx - scale * 0.1, y: cy + scale * 0.7, id: 'stem-bottom' },
        { x: cx - scale * 0.5, y: cy + scale * 0.7, id: 'bottom-left' },
        // Inner Mesh Nodes (interconnected web)
        { x: cx - scale * 0.1, y: cy - scale * 0.3, id: 'inner-1' },
        { x: cx + scale * 0.2, y: cy - scale * 0.3, id: 'inner-2' },
        { x: cx + scale * 0.35, y: cy - scale * 0.05, id: 'inner-3' },
        { x: cx + scale * 0.15, y: cy - scale * 0.05, id: 'inner-center' },
        { x: cx - scale * 0.3, y: cy - scale * 0.2, id: 'inner-left-mid' }
      ];
    };

    let nodes = getNodes();

    // Edges defining lines between nodes
    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], // Outer perimeter
      [0, 11], [11, 7], [7, 1], [7, 8], [8, 2], [2, 9], [9, 3], [3, 10], [10, 4], // Web radial
      [11, 10], [10, 7], [10, 8], [10, 9], [0, 4], [11, 4] // Cross braces
    ];

    // Data pulse particles travelling along edges
    const particles = Array.from({ length: 14 }, () => {
      const connIdx = Math.floor(Math.random() * connections.length);
      return {
        connIdx,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        direction: Math.random() > 0.5 ? 1 : -1,
        size: 3.5 + Math.random() * 2
      };
    });

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angle += 0.01;
      nodes = getNodes();

      // Subtle float motion on inner nodes
      nodes[7].y += Math.sin(angle) * 1.5;
      nodes[10].x += Math.cos(angle * 0.8) * 1.5;
      nodes[8].x += Math.sin(angle * 1.2) * 1.2;

      // Draw background ambient teal glow for light mode
      const cx = width / 2;
      const cy = height / 2;
      const glowGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.min(width, height) * 0.55);
      glowGrad.addColorStop(0, 'rgba(0, 187, 167, 0.10)');
      glowGrad.addColorStop(0.5, 'rgba(0, 187, 167, 0.02)');
      glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Connection Edges (Black Outer & Cyan Inner contrast)
      ctx.lineWidth = 1.8;
      connections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];

        const isOuter = (i <= 6 && j <= 6);
        const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
        
        if (isOuter) {
          grad.addColorStop(0, 'rgba(17, 24, 39, 0.85)');
          grad.addColorStop(0.5, 'rgba(0, 187, 167, 0.9)');
          grad.addColorStop(1, 'rgba(17, 24, 39, 0.85)');
        } else {
          grad.addColorStop(0, 'rgba(0, 187, 167, 0.4)');
          grad.addColorStop(0.5, 'rgba(0, 187, 167, 0.8)');
          grad.addColorStop(1, 'rgba(0, 187, 167, 0.4)');
        }

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      });

      // Update and Draw Data Particles
      particles.forEach((p) => {
        p.progress += p.speed * p.direction;
        if (p.progress > 1) {
          p.progress = 0;
          p.connIdx = Math.floor(Math.random() * connections.length);
        } else if (p.progress < 0) {
          p.progress = 1;
          p.connIdx = Math.floor(Math.random() * connections.length);
        }

        const [i, j] = connections[p.connIdx];
        const n1 = nodes[i];
        const n2 = nodes[j];

        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.shadowColor = '#00BBA7';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#00BBA7';
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((n, idx) => {
        // Outer ring
        ctx.strokeStyle = idx <= 6 ? '#111827' : '#00BBA7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Inner core
        ctx.fillStyle = idx === 10 ? '#00BBA7' : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] flex items-center justify-center overflow-hidden bg-transparent group">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,187,167,0.5) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* HTML5 Canvas Graphic */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Floating System Badges — Clean Green Line Indicator */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-l-4 border-l-[#00BBA7] border border-gray-200 text-xs font-bold text-black shadow-md backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#00BBA7] animate-ping" />
        <span className="font-display font-extrabold text-[#00BBA7]">ONE TEAM ARCHITECTURE</span>
      </div>

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-gray-200 shadow-md backdrop-blur-md max-w-[200px] sm:max-w-[220px]">
        <div className="text-[10px] uppercase font-extrabold tracking-wider text-[#00BBA7] font-display">Zero Fragmentation</div>
        <div className="text-xs font-bold text-black mt-0.5">Site + Ads + AI Systems under one roof</div>
      </div>

      <div className="absolute top-6 right-6 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-md backdrop-blur-md max-w-[210px] hidden sm:block">
        <div className="text-[10px] uppercase font-extrabold tracking-wider text-[#00BBA7] font-display">Fixed Price Scopes</div>
        <div className="text-xs font-bold text-black mt-0.5">$500 Authority Site & Leads</div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-gray-200 shadow-md backdrop-blur-md flex items-center gap-2.5 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00BBA7]/15 flex items-center justify-center text-[#00BBA7] font-extrabold text-xs font-display">
          US/PK
        </div>
        <div>
          <div className="text-[11px] font-bold text-black font-display">Connected Hubs</div>
          <div className="text-[10px] text-gray-500 font-medium">Strategy US · Dev PK</div>
        </div>
      </div>
    </div>
  );
}
