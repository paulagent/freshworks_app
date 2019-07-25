package demo

class BootStrap {

    def init = { servletContext ->
        log.info "Loading database..."


        def driver1 = new Driver(name: "Susan").save()
        def driver2 = new Driver(name: "Pedro").save()

        def nissan = new Make(name: "Nissan").save()
        def ford = new Make(name: "Ford").save()

        def rice  = new  Food_Catogary(name: "rice").save()
        def bread = new  Food_Catogary(name: "bread").save()
        def corn  = new  Food_Catogary(name: "corn").save()

        //new Vehicle(name: "Pickup", driver: driver1, make: nissan, Food_Catogary: rice).save()
       // new Vehicle(name: "Economy", driver: driver1, make: nissan, Food_Catogary: bread).save()
       // new Vehicle(name: "Minivan", driver: driver2, make: ford, Food_Catogary: corn).save()


        new FeedDuckInfo(date: "2019:07:22", loc: "NY", numberofDuck: 1, foodWeight: 1, Food_Catogary: rice, food:bread).save()

    }
    def destroy = {
    }
}
