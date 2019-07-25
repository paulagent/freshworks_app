package demo


import grails.rest.Resource
import java.util.Date

@Resource(uri = '/feedduckinfo')

class FeedDuckInfo {


    Date date

    String loc

    Integer numberofDuck

    Integer foodWeight

    Food_Catogary food_cat

    String food;







}
