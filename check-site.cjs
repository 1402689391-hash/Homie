const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({args: ["--no-sandbox"]});
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on("console", msg => { if (msg.type() === "error") errs.push(msg.text()); });
  
  await p.goto("http://localhost:5178/", { waitUntil: "networkidle", timeout: 30000 });
  await p.waitForTimeout(2000);
  
  // Close any overlay by force
  await p.evaluate(() => {
    document.querySelectorAll(".project-modal-overlay, .gallery-overlay, [class*=modal], [class*=overlay]").forEach(el => {
      if (el.style) el.style.display = "none";
    });
  });
  await p.waitForTimeout(300);
  
  // Click each project button via evaluate
  const btnTexts = ["品牌VIS升级", "半年业绩看板", "品牌内容输出", "流量广告投放", "社媒矩阵"];
  for (const txt of btnTexts) {
    const clicked = await p.evaluate((t) => {
      const btns = document.querySelectorAll("button");
      for (const b of btns) {
        if (b.textContent.trim().includes(t)) { b.click(); return true; }
      }
      return false;
    }, txt);
    console.log(txt + ": click=" + clicked);
    await p.waitForTimeout(1500);
    
    // Check if modal opened
    const hasOverlay = await p.evaluate(() => {
      return !!document.querySelector(".project-modal-overlay, .gallery-overlay, [class*=modal]")
    });
    console.log("  modal shown: " + hasOverlay);
    
    // Close modal
    await p.evaluate(() => {
      // Try clicking the overlay background to close
      const overlay = document.querySelector(".project-modal-overlay, .gallery-overlay");
      if (overlay) overlay.click();
    });
    await p.waitForTimeout(500);
    
    // Force close any remaining overlays
    await p.evaluate(() => {
      document.querySelectorAll(".project-modal-overlay, .gallery-overlay, [class*=modal]").forEach(el => {
        if (el.style) { el.style.display = "none"; el.style.opacity = "0"; el.style.pointerEvents = "none"; }
      });
      // Remove any backdrop
      document.querySelectorAll("[class*=backdrop], [class*=backdrop]").forEach(el => el.remove());
    });
    await p.waitForTimeout(300);
  }
  
  console.log("Errors: " + errs.length);
  errs.forEach((e,i) => console.log("  [" + i + "] " + e.substring(0,150)));
  await b.close();
  console.log("Done!");
})();
