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





}
