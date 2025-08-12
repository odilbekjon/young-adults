import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import newUzbekistan from "../../assets/young-adults2.png";
import istiqlolBranch from "../../assets/istiqlolBranch.jpg";
import grammarCampus from "../../assets/grammarCampus.jpg";

export const Locations = () => {
    return(
        <div className="px-4 py-12">
            <h1 className="text-4xl font-bold mb-4 text-center text-orange-500">Bizning manzillar</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-3xl mb-2">Yangi O'zbekiston</CardTitle>
                        <img className="card-image" src={newUzbekistan} width={500} height={300} alt="" />
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
                        <CardTitle className="text-3xl mb-2">Istiqlol ko'chasi</CardTitle>
                        <img className="card-image" src={istiqlolBranch} alt="" />
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
                        <CardTitle className="text-3xl mb-2">Grammar Campus</CardTitle>
                        <img className="card-image" src={grammarCampus} alt="" />
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