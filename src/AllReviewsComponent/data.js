import heroImg from "../assets/images/heroImg.jfif"
import navAvatar from "../assets/images/navAvatar.jfif"
import img1 from "../assets/images/img1.jfif"
import img2 from "../assets/images/img2.jfif"
import img3 from "../assets/images/img3.jfif"
import img4 from "../assets/images/img4.jfif"



const SearchData = [
    
      {
        imgs:[
            img1,
            img2,
            img3,
            img4,
        ],
        address: "Bonny and Clyde Street, Ajao Estate, Lagos",
        location: "Ikete,Lekki",
        rating:"4.0",
        reviews:[
            {
            img: navAvatar,
            address: "Bonny and Clyde Street, Ajao Estate, Lagos",
            name:"James T",
            month: "5 months ago",
            description:" There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.z",
            like: 58,
            dislike: 4,
            comment: 24,
          },
          {
            img: heroImg,
            address: "Bonny and Clyde Street, Ajao Estate, Lagos",
            name:"John Kennedy",
            month: "4 months ago",
            description:" There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.z",
            like: 28,
            dislike: 2,
            comment: 54,
          },
        ],
        type:"power",
      },
      
      {
        imgs:[
          img1,
          img2,
          img3,
          img4,
      ],
        address: "King Ajoa Street, Lekki, Lagos",
        location: "Ikete,Lekki",
        rating:"4.0",
        reviews:[
            {
            img: heroImg,
            name:"James T",
            address: "King Ajoa Street, Lekki, Lagos",
            month: "5 months ago",
            description:" There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.z",
            like: 28,
            dislike: 2,
            comment: 24,
          },
          {
            img: heroImg,
            name:"James T",
            address: "King Ajoa Street, Lekki, Lagos",
            month: "5 months ago",
            description:" There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.z",
            like: 28,
            dislike: 2,
            comment: 24,
          },
        ],
        type:"power",
      },

      {
        imgs:[
          img1,
          img2,
          img3,
          img4,
      ],
        address: "King James Adika, Iwo Road, Ibadan",
        location: "Ikete,Lekki",
        rating:"4.0",
        reviews:[],
        type:"power",
      },
      
]

export default SearchData;
