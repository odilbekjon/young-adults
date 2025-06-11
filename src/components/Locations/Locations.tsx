import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import img from "../../assets/young-adults2.png";
import img2 from "../../assets/filial2.jpg";

export const Locations = () => {
    return(
        <div className="px-4 py-12">
            <h1 className="text-4xl font-bold mb-4 text-center">Bizning manzillar</h1>

            <div className="flex flex-wrap justify-center gap-10">
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-3xl mb-2">Yangi O'zbekiston</CardTitle>
                        <img className="card-image" src={img} width={500} height={300} alt="" />
                    </CardHeader>
                    <CardContent>
                        <p><b>Ish vaqti:</b> 09:00 - 20:00</p>
                    </CardContent>
                    <CardFooter>
                        <p> <b>Telfon raqam:</b> +99890 295 70 07</p>
                    </CardFooter>
                </Card>
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-3xl mb-2">Yangi O'zbekiston</CardTitle>
                        <img className="card-image" src={img2} alt="" />
                    </CardHeader>
                    <CardContent>
                        <p><b>Ish vaqti:</b> 09:00 - 20:00</p>
                    </CardContent>
                    <CardFooter>
                        <p> <b>Telfon raqam:</b> +99890 295 70 07</p>
                    </CardFooter>
                </Card>
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-3xl mb-2">Yangi O'zbekiston</CardTitle>
                        <img className="card-image" src={img} alt="" />
                    </CardHeader>
                    <CardContent>
                        <p><b>Ish vaqti:</b> 09:00 - 20:00</p>
                    </CardContent>
                    <CardFooter>
                        <p> <b>Telfon raqam:</b> +99890 295 70 07</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}