import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  test: {
    // setupFiles: ['./vitest.setup'],
    // Cho phép sử dụng biến toàn cục trong test (ví dụ: describe, it, expect)
    globals: true,
    // Sử dụng môi trường jsdom nếu bạn test các component React có liên quan đến DOM
    environment: 'jsdom',

    // Cấu hình coverage
    coverage: {
      // Chọn provider: 'c8' (mặc định), 'istanbul', hay 'v8'
      provider: 'v8',
      // Các reporter để xuất kết quả coverage
      reporter: ['text', 'html'],
      // Loại trừ các file không cần tính coverage
      exclude: ['node_modules/', 'dist/'],
    },
  },
  base: '/react-vite-cicd-test/',   
  plugins: [react()],
})
