export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-5">
          <div className="flex justify-around flex-wrap gap-6 max-w-5xl">
            {/* Ô bên trái */}
            <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Nhóm Trưởng</h2>
              <img
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/398466993_2032493237113377_5333452190970616239_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZl-qgHsUHD8z5tIsTeTm8_KJLc5YxsGD8oktzljGwYFB0A7RBWVBLOAATfxjteA6UWbyZnz0UaMcGVIutjuTu&_nc_ohc=KP0z9zqOfJIQ7kNvgEgedHH&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=Ajsua_cLR-1A2_kwcVhiBzX&oh=00_AYAwQJIBy9SeoyJW5VOy-bFbZC6ThoCux5ftVodi_oXLRg&oe=674A3346"
                alt="Member 1"
                className="w-24 h-24 rounded-full border-4 border-white mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Lý Tiến Đạt</h2>
              <p><strong>Email:</strong> tiendat176mt@gmail.com</p>

              <p>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/eagle-nett" className="text-blue-400 hover:underline">
                  litndat
                </a>
              </p>
            </div>
    
            {/* Ô ở giữa */}
            <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Thành Viên 2</h2>
    
              <img
                src="/img/avt.jpg"
                alt="Member 2"
                className="w-24 h-24 rounded-full border-4 border-white mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Lê Quốc Anh</h2>
              <p><strong>Email:</strong> 94quocanh1872003@gmail.com</p>

              <p>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/lequoca" className="text-blue-400 hover:underline">
                  lqanh
                </a>
              </p>
            </div>
    
            {/* Ô bên phải */}
            <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Thành Viên 3</h2>
    
              <img
                src="/img/avt1.jpg"
                alt="Member 3"
                className="w-24 h-24 rounded-full border-4 border-white mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Nguyễn Đăng Khoa</h2>
              <p><strong>Email:</strong> xdangxkhoax@gmail.com</p>

              <p>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/nguyendangkhoa546289" className="text-blue-400 hover:underline">
                  ndkhoa
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    /*
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-5">
          <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Thông Tin Nhóm Thực Hiện Đồ Án</h2>
    
            /* Thêm hình ảnh 
            <div className="flex items-center justify-center mb-4">
              <img
                src="/path-to-your-image.jpg" // Đường dẫn tới file hình ảnh
                alt="Group Avatar"
                className="w-32 h-32 rounded-full border-4 border-white"
              />
            </div>
    
            /* Thông tin cá nhân 
            <p><strong>Name:</strong> TienDat</p>
            <p><strong>Email:</strong> tiendat@gmail.com</p>
            <p><strong>Phone:</strong> +123456789</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/johndoe" className="text-blue-400 hover:underline">
                litndat
              </a>
            </p>
            
          </div>
        </div>
      );
    }*/
  