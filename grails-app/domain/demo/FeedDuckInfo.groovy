package demo


import grails.rest.Resource
import java.util.Date

@Resource(uri = '/feedduckinfo')

class FeedDuckInfo {


    Date feedtime

    String loc

    Integer numberOfDucks

    Integer weightOfFood

    String food_category

    String food



    static constraints = {
        feedtime blank:false
        loc blank:false
        numberOfDucks blank:false
        weightOfFood blank:false
        food_category blank:false
        food blank:false
    }


}
