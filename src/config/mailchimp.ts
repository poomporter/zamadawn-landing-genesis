// Mailchimp Configuration
// วิธีหา Mailchimp Form Action URL:
// 1. ไปที่ Mailchimp Dashboard -> Audience -> Signup forms -> Embedded forms
// 2. คัดลอก URL จาก form action="..." ในโค้ด HTML
// 3. แทนที่ค่า MAILCHIMP_FORM_ACTION_URL ด้านล่าง
//
// ตัวอย่าง URL: https://yourdomain.us1.list-manage.com/subscribe/post?u=xxx&id=xxx

export const MAILCHIMP_CONFIG = {
  // ใส่ Mailchimp Form Action URL ของคุณที่นี่
  FORM_ACTION_URL: 'YOUR_MAILCHIMP_FORM_ACTION_URL',
  
  // Field name สำหรับ email (โดยปกติคือ EMAIL)
  EMAIL_FIELD_NAME: 'EMAIL',
  
  // เปิดใช้งาน Mailchimp integration (เปลี่ยนเป็น true เมื่อตั้งค่าเสร็จแล้ว)
  ENABLED: false
};
