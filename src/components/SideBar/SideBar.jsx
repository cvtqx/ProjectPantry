import { Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
    // add more icons as needed
       const sidebarItems = [
        {
            icon: <FaHome size={25} />,
            text: "Home",
            link: "/"
        },
        {
            icon: <FaSearch />,
            text: "Search",
        },
        
    ]
    return (
      <Box
          height={"100vh"}
          bgColor={'orange'}
          py={8}
          position={"sticky"}
          top={0}
          left={0}
          px={{base:2, md:4}}
      >
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                {/* insert logo */}
                <h1>Project Pantry</h1>
              <Flex direction={"column"} gap={5} cursor={"pointer"}>
                  {sidebarItems.map((item, index) => (
                      <Tooltip
                          hasArrow
                          label={item.text}
                          placement="right"
                          key={index}
                          ml={1}
                          openDelay={500}
                          display={{base:'block', md:'none'}}
                      >
                          <Link
                              display={"flex"}
                              to={item.link || null }
                              as={RouterLink}
                              alignItems={"center"}
                              gap={4}
                              _hover={{ bg: "whiteAlpha.400" }}
                              borderRadius={6}
                              p={2}
                              w={{base: 10, md: "full"}}
                              justifyContent={{base:"center", md: "flex-start"}}
                          >
                              {item.icon}
                              <Box display={{base:"none", md:"block"}}>
                                {item.text}
                              </Box>
                        </Link>
                      </Tooltip>
                  ))}
              </Flex>
               <Tooltip
                          hasArrow
                          label={"Logout"}
                          placement="right"
                          ml={1}
                          openDelay={500}
                          display={{base:'block', md:'none'}}
                      >
                          <Link
                              display={"flex"}
                              to={'/auth'}
                              as={RouterLink}
                              alignItems={"center"}
                              gap={4}
                              _hover={{ bg: "whiteAlpha.400" }}
                              borderRadius={6}
                              p={2}
                      w={{ base: 10, md: "full" }}
                      mt={"auto"}
                              justifyContent={{base:"center", md: "flex-start"}}
                          >
                              <BiLogOut size={25} />
                              <Box display={{base:"none", md:"block"}}>
                                Log out
                              </Box>
                  </Link>
                  </Tooltip>
          </Flex>
      </Box>
  )
}

export default SideBar