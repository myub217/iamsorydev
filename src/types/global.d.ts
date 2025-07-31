// ✅ src/types/global.d.ts — Global Types สำหรับ JP Visual & Docs
// ใช้กับ Tawk.to Live Chat, รองรับ Secure Mode และ Visitor Info

export {}; // ป้องกัน Global scope pollution

declare global {
  interface Window {
    /**
     * ✅ Tawk_API — Object จาก Tawk.to สำหรับควบคุมการทำงานของ Widget
     * - visitor: ข้อมูลผู้เข้าชมที่ใช้แสดงในแชท
     * - secureToken: ใช้เมื่อเปิด Secure Mode (JWT จาก backend)
     * - รองรับ method อื่น ๆ จาก Tawk API เช่น maximize, toggle, etc.
     */
    Tawk_API?: {
      visitor?: {
        name?: string;
        email?: string;
      };
      secureToken?: string;
      [key: string]: unknown;
    };

    /**
     * ✅ Tawk_LoadStart — เวลาที่เริ่มโหลดแชท ใช้ดู performance
     */
    Tawk_LoadStart?: Date;
  }
}