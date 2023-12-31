import { Box, Button, Flex, Input, Radio, RadioGroup, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [pacakage, setPackage] = useState("");
    const [searchRes, setSearchRes] = useState(["reactjs", "react-redux", "react-i18next", "angular", "react-router-dom", "chakra-ui", "axios"]);
    const [value, setValue] = useState(null);
    const [textarea, setTextArea] = useState("");
    const [filtValue, setFilt] = useState(searchRes)
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        let val = searchRes.filter((el, i) => {
            let newEl = "#" + el + "#";
            newEl = newEl.split(pacakage);
            if (newEl.length > 1) {
                return el;
            }
        })
        setFilt(val || []);

    }, [pacakage])

    const addToFav = () => {
        let data = JSON.parse(localStorage.getItem("favPacakages")) || [];

        console.log(data);
        if (value && textarea) {
            let obj = { "fav": value, "resion": textarea }
            data.push(obj);
            localStorage.setItem("favPacakages", JSON.stringify(data));
            toast({
                title: 'Pacakage added.',
                description: "Pacakage added",
                status: 'success',
                duration: 9000,
                position: "top",
                isClosable: true,
            })

            navigate("/favourates")
        }
    }

    return (
        <>
            <Box pl={"20%"} pr={"20%"} mt={"150px"}>
                <Text textAlign={"start"}>Search for NPM Packages</Text>
                <Input placeholder="angular" value={pacakage} onChange={(e) => setPackage(e.target.value)} />
                <Box mt={"20px"}>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='column' maxH={"150px"} minH={"150px"} overflow={"scroll"}>
                            {filtValue.map((el, i) => (
                                <Radio key={i} value={el}>{el}</Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </Box>
                <Text textAlign={"start"} mt={"20px"} >why is this is your fav</Text>
                <Textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} />

                <Flex justifyContent={"flex-end"}>
                    <Button onClick={() => addToFav()} bgColor={"#6558f5"} color={"white"} _hover={{ bgColor: "#877fff" }} mt={"20px"} alignSelf={"end"}>Submit</Button>
                </Flex>
            </Box>
        </>
    )
}

export default Home;