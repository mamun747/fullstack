import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

function Hero(){
    return(
        <>
        <section className="bg-[url('/Hero.png')] h-[80vh] bg-no-repeat w-full bg-cover">
        <div className="container w-[80%] mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-6xl lg:leading-[74.4px] w-full lg:w-[55%] font-bold p-10 mt-[30px] text-white text-center lg:text-left">Find amazing things to do anytime, anywhere in Lagos.</h1>
            <div className="bg-[#fbfcff] w-full h-auto lg:w-[750px] lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl">
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
               <div>
               <Autocomplete labelPlacement="outside" label="Location" placeholder="Oshodi" className="wfull">
                    <AutocompleteItem>Oshodi</AutocompleteItem>
                    <AutocompleteItem>Oxford</AutocompleteItem>
                    <AutocompleteItem >Medicin sqaure</AutocompleteItem>
                </Autocomplete>
               </div>
               <div>
               <Autocomplete labelPlacement="outside" label="Date" placeholder="Date" className="wfull">
                    <AutocompleteItem>01/12/2024</AutocompleteItem>
                    <AutocompleteItem>31/12/2024</AutocompleteItem>
                    <AutocompleteItem >01/01/2025</AutocompleteItem>
                </Autocomplete>
               </div>
               <div>
               <Autocomplete labelPlacement="outside" label="Activities" placeholder="Activities" className="wfull">
                    <AutocompleteItem>Night Clubs</AutocompleteItem>
                    <AutocompleteItem>Birthday Party</AutocompleteItem>
                    <AutocompleteItem >Mariage Ceremony</AutocompleteItem>
                </Autocomplete>
               </div>
               <div>
                <Button color="primary" className="w-full p-8 mt-2">Search</Button>
               </div>
                </div> 
            </div>
        </div>
        </section>
        </>
    )
}
export default Hero;