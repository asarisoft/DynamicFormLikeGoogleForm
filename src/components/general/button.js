import styled from 'styled-components';

// Membuat sebuah komponen styled untuk tombol
export const StyledButton = styled.button`
  background-color: #007bff; /* Warna latar belakang */
  color: #fff; /* Warna teks */
  padding: 8px 16px; /* Padding atas dan bawah 8px, padding kiri dan kanan 16px */
  border: none; /* Tidak ada border */
  border-radius: 4px;: 4px; /* Sudut melengkung */
  cursor: pointer; /* Kursor berubah menjadi tangan saat diarahkan */
  transition: background-color 0.2s ease-in-out; /* Transisi warna latar belakang */

  &:hover {
    background-color: #0056b3; /* Warna latar belakang saat hover */
  }
`;


