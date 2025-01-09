import image from "/chip.jpeg"
import { z } from "zod"
export const contactUsSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(),
    company: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  })

  export const careerSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(),
    resume: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  })
export const SectionEnum = {
    AWARDS:"AWARDS",
    PRODUCTS:"PRODUCTS",
    HOME:"HOME"
  };
export const FormEnum = {
    CAREER:"CAREER",
    CONTACT:"CONTACT",
  };
export const ClientData= [
    {
        title:"Volvo India Private Limited",
        imageUrl:"/Images/Logos/png-transparent-volvo-logo-volvo-cars-ab-volvo-logo-pga-tour-volvo-car-logo-brand-company-text-trademark.png"
    },
    {
        title:" Kobelco Construction Equipment India Pvt. Ltd.",
        imageUrl:"/Images/Logos/png-transparent-kobelco-hd-logo.png"
    },
    {
        title:"Tata Hitachi Construction Machinery",
        imageUrl:"/Images/Logos/Tata_Hitachi_Construction_Machinery_Company_Ltd..svg.png"
    },
    {
        title:"BHEL",
        imageUrl:"/Images/Logos/manufacturing-ntpc-limited-industry-logo-area.jpg"
    },
    {
        title:"BEML Limited",
        imageUrl:"/Images/Logos/BEML_Limited_Logo.png"
    },
    // {
    //     title:"L&T Komatsu Limited"
    // },
    // {
    //     title:"Leeboy India Equipment Pvt. Ltd."
    // },
    // {
    //     title:"Doosan Infracore India Pvt. Ltd."
    // },
]
export const ProductData= [
    {
        title:"EXCAVATORS",
        imageUrl:"/Images/Others/5.svg",
        productData:[
            "Buckets Sizes 0.75T to 125T Excavators",
            "Under Frames of Excavators up to 60T Capacity",
            "Revolving Frames of Excavators up to 60T Capacity",
            "Booms, Arms and Buckets for Excavators up 60T Capacity",
            "Linkage Structures for Excavators",
            "Excavator Attachments such as Tilt Couplers, Chubb Thumb, Twin fork, Track Guards etc."
          ]
    },
    {
        title:" ROAD MACHINERY",
        imageUrl:"/Images/Others/6.svg",
        productData:[
            "Main Frame for Pneumatic Tyre Roller Compactors, Pavers etc.",
            "Main Frames and Structures for Compactors.",
            "Compactor Parts for Drive System."
          ]
    },
    {
        title:"MINING MACHINERY",
        imageUrl:"/Images/Others/7.svg",
        productData:[
            "Crusher Frames for Stone Crushing Machinery.",
            "Rotors",
            "Chassis for Stone Crushing Machinery.",
            "Liner Plates"
          ]
    },

]
  export const AwardsData = [
    {
      title: "Volvo India Private Limited",
      timelineData: [
        {
          year: 2010,
          details: [
            {
              name: "For Performace on Delivery in year 2010-11",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },
        {
          year: 2011,
          details: [
            {
                name: "For Performace on Delivery in year 2011-12",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
        {
          year: 2012,
          details: [
            {
                name: "For Performace on Delivery in year 2012-13",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
        {
          year: 2013,
          details: [
            {
                name: "For Performace on Delivery in year 2013-14",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
        {
          year: 2015,
          details: [
            {
                name: "For Performace on Delivery in year 2015-16",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
        {
          year: 2016,
          details: [
            {
                name: "**For Performace on Delivery in year 2016-15",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
      ],
    },
    {
      title: "Koblaco India Private Limited",
      timelineData: [
        {
          year: 2022,
          details: [
            {
              name: "Award 21k",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },
        {
          year: 2023,
          details: [
            {
              name: "Award 23k",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
        {
          year: 2024,
          details: [
            {
              name: "Award 24k",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
      ],
    },
    {
      title: "TELCON",
      timelineData: [
        {
          year: 2010,
          details: [
            {
              name: "For Performance on Delivery in year 2010-11",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
            {
              name: "For Performance on Quality in year 2010-11",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },
        {
          year: 2011,
          details: [
            {
                name: "For Performance on Quality in year 2011-12",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
      ],
    },
    {
      title: "Bharat Heavy Electricals Limited(BHEL)",
      timelineData: [
        {
          year: 2011,
          details: [
            {
              name: "For Performance on Delivery in year 2011-12",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },
        {
            year: 2012,
            details: [
              {
                name: "For Performance on Delivery in year 2012-13",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: image,
              },
            ],
          },
          {
            year: 2013,
            details: [
              {
                name: "For Performance on Delivery in year 2013-14",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: image,
              },
            ],
          },
          {
            year: 2022,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: image,
              },
            ],
          },
          {
            year: 2023,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: image,
              },
            ],
          },
          {
            year: 2024,
            details: [
              {
                name: "For Performance on Delivery in year 2011-12",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
                image: image,
              },
            ],
          },

      ],
    },
    {
      title: "BHEL",
      timelineData: [
        {
          year: 2018,
          details: [
            {
              name: "Vendor Meet-2018",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
            {
              name: "Best performance on Vendor-2018",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },
        {
          year: 2019,
          details: [
            {
              name: "Appreciation for performance-2019",
              description: "Another milestone achieved!",
              image: image,
            },
            {
              name: "Award 22",
              description: "Another milestone achieved!",
              image: image,
            },
          ],
        },
      ],
    },
    {
      title: "Kobelco",
      timelineData: [
        {
          year: 2022,
          details: [
            {
              name: "Quality Excellence award 2022-Kobelco",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },

      ],
    },
    {
      title: "Volvo",
      timelineData: [
        {
          year: 2016,
          details: [
            {
              name: "Supplier of the Month March-2016",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odio laborum sed est, delectus minima!",
              image: image,
            },
          ],
        },

      ],
    },

  ];
export const machinesData = [
    {
      slNo: 1,
      name: "6 axes CNC Floor Mounted Horizontal Boring Machine. Make: FERMAT – Czech Republic",
      qty: 1,
      sizeAndCapacity: `X: 9,500mm, Y: 3,500mm, W+Z: 1,500mm, V: 1,400mm,
                        Table size: 2,000 x 2,400, Table Travel: 1500mm, Table capacity: 25MT,
                        Spindle diameter: 130mm, 4 heads`,
    },
    {
      slNo: 2,
      name: "CNC Gas / Plasma cutting machine Make: Messers",
      qty: 1,
      sizeAndCapacity: "20,000mm (L) x 3,500mm (W), Kjellberg Q3000+",
    },
    {
      slNo: 3,
      name: "CNC Press Brake Make: Hindustan Hydraulics",
      qty: 1,
      sizeAndCapacity: "140 MT, 3,000mm width",
    },
    {
      slNo: 4,
      name: "Radial Drilling Machines",
      qty: 1,
      sizeAndCapacity: "Drilling capacity 50mm solid. Radial arm 1,800mm",
    },
    {
      slNo: 5,
      name: "Welding Machine",
      qty: 12,
      sizeAndCapacity: "KR-500, Panasonic",
    },
    {
      slNo: 6,
      name: "Gouging machine",
      qty: 1,
      sizeAndCapacity: "Panasonic",
    },
    {
      slNo: 7,
      name: "Shot Blasting Chamber",
      qty: 1,
      sizeAndCapacity: "13m (L) x 6m (W) x 3.5m (H)",
    },
    {
      slNo: 8,
      name: "Airless Spray-Painting Booth",
      qty: 1,
      sizeAndCapacity: "13m (L) x 5m (W) x 3.5m (H)",
    },
    {
      slNo: 9,
      name: "Drying Oven - Electric",
      qty: 1,
      sizeAndCapacity: "5.2m (L) x 2.9m (W) x 2.5m (H)",
    },
    {
      slNo: 10,
      name: "Hydraulic Test Rig for Excavator Attachments",
      qty: 1,
      sizeAndCapacity: "High pressure testing at 350Bar",
    },
    {
      slNo: 11,
      name: "Forklift",
      qty: 1,
      sizeAndCapacity: "3T Capacity with 6,000mm lift height",
    },
    {
      slNo: 12,
      name: "Cranes",
      qty: 2,
      sizeAndCapacity: "Maximum capacity 10 MT",
    },
  ];
