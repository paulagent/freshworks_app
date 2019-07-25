package demo

import grails.rest.Resource

@Resource(uri = '/vehicle')
class Vehicle {

    String name

    Make make
    Food_Catogary model

    static belongsTo = [driver: Driver]

    static constraints = {
    }
}
