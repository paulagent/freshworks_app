package demo

import grails.rest.Resource

@Resource(uri = '/foodcategary')
class FoodCategary {

    String name

    static constraints = {
    }
}
