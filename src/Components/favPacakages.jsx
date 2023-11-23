import { Box, Button, Flex, Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import DeleteModal from "./deleteModal";
import ViewData from "./view";
import { useNavigate } from "react-router-dom";

const FavPacakages = () => {
    const [data, setData] = useState([])
    const [count,setCount] = useState(0);
    const navigate = useNavigate();

    const deletefav = (i) => {
        let newData = data;
        newData.splice(i,1);
        // console.log(newData);
        localStorage.setItem("favPacakages",JSON.stringify(newData))
        console.log(newData);
        setData(newData);
        setCount(count+1);
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("favPacakages")))
        // console.log("hjfbdhjjbdfhbjfd");
    },[count])

    console.log(data);

    return (
        <>
            <Box pl={"20%"} pr={"20%"} mt={"100px"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text textAlign={"start"}>Welcome to Favourite NPM Packages</Text>
                    {data.length > 0 && <Button w={"100px"} bgColor={"#6558f5"} color={"white"} _hover={{ bgColor: "#877fff" }} mt={"20px"} onClick={() => navigate("/")} >Add Fav</Button>}
                </Box>
               {data.length == 0 && <Box mt={"50px"} w={"100%"} h={"200px"} border={"1px solid #d1d1d1"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                    <Text>You don't have any favs yet.Please add.</Text>
                    <Button w={"100px"} bgColor={"#6558f5"} color={"white"} _hover={{ bgColor: "#877fff" }} mt={"20px"} onClick={() => navigate("/")}  >Add Fav</Button>
                </Box>}

                {data.length >0 && <Table mt={"20px"}>
                    <Thead>
                        <Tr>
                            <Td border={"1px solid #d1d1d1"}>Package</Td>
                            <Td border={"1px solid #d1d1d1"}>Actions</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((el, i) => (
                            <Tr key={i}>
                                <Td border={"1px solid #d1d1d1"}>{el.fav}</Td>
                                <Td border={"1px solid #d1d1d1"}>
                                    <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                                        <ViewData el={el} />
                                        {/* <RiEditBoxFill /> */}
                                        {/* <RiDeleteBin5Fill /> */}
                                        <DeleteModal deletefav={deletefav} i={i} />
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>}
            </Box>
        </>
    )
}

export default FavPacakages;