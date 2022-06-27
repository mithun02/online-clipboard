import {Box, Textarea, useToast} from "@chakra-ui/react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import React from "react";

function ToastBox(props){
    const toast = useToast()


    return (
        (!props.isCode) ? <Box
            marginTop={props.mt}
            marginBottom={props.mb}
            ml={props.ml}
            minH={props.minH}
            display={props.display}
            paddingTop={props.pt}
            paddingLeft={props.pl}
            as="button"
            alignItems="center"
            width={props.width}
            fontWeight={props.fontWeight}
            style={ (props.isCode) ? {
                display:"flex",
                alignItems: "center",
                justifyContent:"center"
            } : {}}
            onClick={ () => {

                toast({
                    title: props.title,
                    description: props.description,
                    status: props.status,
                    duration: props.duration,
                    isClosable: props.closable,
                })
                navigator.clipboard.writeText(!props.textarea ? props.data : props.data.data )
            }
            }

        >
            {(!props.textarea) ? props.data : <Textarea style={{
                color: "black"
            }} variant="filled" isReadOnly resize={"none"} value={props.data.data} />}

        </Box> : <SyntaxHighlighter onClick={() => {
            toast({
                title: props.title,
                description: props.description,
                status: props.status,
                duration: props.duration,
                isClosable: props.closable,
            })
            navigator.clipboard.writeText(props.data.data )
        }}
                                    language={props.data.meta.language}
                                    style={{...styles[props.data.meta.theme]}}>
            {props.data.data}
        </SyntaxHighlighter>
    )
}

export default ToastBox;
