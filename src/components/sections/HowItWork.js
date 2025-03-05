
// import React from "react";
// import { Box, Typography, Card, CardContent } from "@mui/material";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// const steps = [
//   { id: 1, title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do." },
//   { id: 2, title: "Sprint planning", description: "Sprint meetings is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
//   { id: 3, title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
//   { id: 4, title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
//   { id: 5, title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
//   { id: 6, title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
// ];

// const HowItWork = () => {
//   return (
//     <Box
//       id="how-it-works"
//       sx={{
//         width: "100%",
//         minHeight: "100vh", // لجعل القسم يأخذ ارتفاع الصفحة بالكامل
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start", // تغيير من توسيط المحتوى إلى بداية الصفحة
//         alignItems: "center", // توسيط المحتوى أفقيًا
//         textAlign: "center",
//         backgroundColor: "#fff",
//         padding: "20px",
//       }}
//     >
//       {/* القسم الأول: العنوان */}
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "80px", // إضافة هامش أسفل لفصل العنوان عن المخطط
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "700",
//             color: "#458FF6",
//             fontFamily: "monospace",
//           }}
//         >
//           HOW IT WORK
//         </Typography>
//       </Box>

//       {/* القسم الثاني: المخطط الزمني والبطاقات */}
//       <Box
//         sx={{
//           width: "90%",
//         //   maxWidth: "1200px",
//           position: "relative",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "200px"
//         }}
//       >
//         {/* الخط الأزرق الرئيسي في المنتصف */}
//         <Box
//           sx={{
//             position: "absolute",
//             width: "100%",
//             height: "3px",
//             backgroundColor: "#458FF6",
           
//             left: 0,
//             transform: "translateY(-50%)",
//           }}
//         ></Box>

//         {/* البطاقات */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             position: "relative",
//           }}
//         >
//           {steps.map((step, index) => (
//             <Box
//               key={step.id}
//               sx={{
//                 position: "relative",
//                 textAlign: "center",
//                 top: index % 2 === 0 ? "-153px" : "155px",
//               }}
//             >
//               <Card
//                 sx={{
//                   width: "230px",
//                   minHeight: "120px",
//                   padding: "10px",
//                   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//                   borderRadius: "8px",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
//                   },
//                   backgroundColor: index % 2 === 0 ? "#fff" : "#F8F9FA",
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: "bold", color: "#232233", fontSize: "1rem" }}
//                   >
//                     #{step.id} {step.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ fontSize: "0.8rem", color: "#666" }}
//                   >
//                     {step.description}
//                   </Typography>
//                 </CardContent>
//               </Card>

//               {/* الخط العمودي الصغير يربط البطاقة بالخط الزمني */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: "2px",
//                   height: "50px",
//                   backgroundColor: "#458FF6",
//                   left: "50%",
//                   top: index % 2 === 0 ? "100%" : "-50px",
//                   transform: "translateX(-50%)",
//                 }}
//               ></Box>
//             </Box>
//           ))}
//         </Box>

//         {/* أيقونة الكأس في نهاية الخط الزمني */}
//         <Box sx={{ position: "absolute", right: "-30px", top: "50%", transform: "translateY(-50%)" }}>
//           <EmojiEventsIcon sx={{ fontSize: "40px", color: "#FDC830" }} />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HowItWork;

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const steps = [
  { id: 1, title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do." },
  { id: 2, title: "Sprint planning", description: "Sprint meetings is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
  { id: 3, title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
  { id: 4, title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
  { id: 5, title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
  { id: 6, title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
];

const HowItWork = () => {
  return (
    <Box
      id="how-it-works"
      sx={{
        width: "100%",
        minHeight: "100vh", // لجعل القسم يأخذ ارتفاع الصفحة بالكامل
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // تغيير من توسيط المحتوى إلى بداية الصفحة
        alignItems: "center", // توسيط المحتوى أفقيًا
        textAlign: "center",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      {/* القسم الأول: العنوان */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px", // إضافة هامش أسفل لفصل العنوان عن المخطط
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            color: "#458FF6",
            fontFamily: "monospace",
          }}
        >
          HOW IT WORK
        </Typography>
      </Box>

      {/* القسم الثاني: المخطط الزمني والبطاقات */}
      <Box
        sx={{
          width: "75%", // تقليل عرض القسم
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "240px", // تقليل الهامش العلوي
        }}
      >
        {/* الخط الأزرق الرئيسي في المنتصف */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "3px",
            backgroundColor: "#458FF6",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
          }}
        ></Box>

        {/* البطاقات */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.id}
              sx={{
                position: "relative",
                textAlign: "center",
                top: index % 2 === 0 ? "-120px" : "120px", // تقليل المسافة بين البطاقات
              }}
            >
              <Card
                sx={{
                  width: "200px", // تقليل عرض البطاقة
                  minHeight: "100px", // تقليل ارتفاع البطاقة
                  padding: "8px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                  backgroundColor: index % 2 === 0 ? "#fff" : "#F8F9FA",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#232233", fontSize: "0.8rem" }} // تقليل حجم الخط
                  >
                    #{step.id} {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.7rem", color: "#666",}} // تقليل حجم الخط
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>

              {/* الخط العمودي الصغير يربط البطاقة بالخط الزمني */}
              <Box
                sx={{
                  position: "absolute",
                  width: "2px",
                  height: "25px", // تقليل ارتفاع الخط العمودي
                  backgroundColor: "#458FF6",
                  left: "50%",
                  top: index % 2 === 0 ? "184px" : "-30px", // تعديل الموضع
                  transform: "translateX(-50%)",
                }}
              ></Box>
            </Box>
          ))}
        </Box>

        {/* أيقونة الكأس في نهاية الخط الزمني */}
        <Box sx={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)" }}>
          <EmojiEventsIcon sx={{ fontSize: "30px", color: "#FDC830" }} /> {/* تقليل حجم الأيقونة */}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWork;