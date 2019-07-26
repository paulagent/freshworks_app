package demo

import spock.lang.Specification
import spock.lang.Unroll
import spock.lang.Subject
import spock.lang.Ignore
import grails.testing.gorm.DomainUnitTest

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@SuppressWarnings(['MethodName', 'DuplicateNumberLiteral', 'DuplicateListLiteral', 'LineLength'])
// tag::testForTests[]

class FeedDuckInfoSpec  extends Specification implements DomainUnitTest<FeedDuckInfo> {


    @Subject
    FeedDuckInfo domain

    def setup() {
        domain = new FeedDuckInfo()
    }

    // tag::locTests[]
    void 'test loc cannot be null'() {
        when:
        domain.loc = null

        then:
        !domain.validate(['loc'])
        domain.errors['loc'].code == 'nullable'
    }

    void 'test loc cannot be blank'() {
        when:
        domain.loc = ''

        then:
        !domain.validate(['loc'])
    }

    void 'test name can have a maximum of 255 characters'() {
        when: 'for a string of 256 characters'
        String str = 'a' * 256
        domain.name = str

        then: 'name validation fails'
        !domain.validate(['name'])
        domain.errors['name'].code == 'maxSize.exceeded'

        when: 'for a string of 256 characters'
        str = 'a' * 255
        domain.name = str

        then: 'name validation passes'
        domain.validate(['name'])
    }
    // end::locTests[]

    /*
    // tag::latitudeAndLongitudeTests[]
    @Unroll('loc.validate() with latitude: #value should have returned #expected with errorCode: #expectedErrorCode')
    void 'test latitude validation'() {
        when:
        domain.latitude = value

        then:
        expected == domain.validate(['latitude'])
        domain.errors['latitude']?.code == expectedErrorCode

        where:
        value                  | expected | expectedErrorCode
        null                   | true     | null
        0                      | true     | null
        0.5                    | true     | null
        90                     | true     | null
        90.5                   | false    | 'range.toobig'
        -90                    | true     | null
        -180                   | false    | 'range.toosmall'
        180                    | false    | 'range.toobig'
    }

    @Unroll('loc.longitude() with latitude: #value should have returned #expected with error code: #expectedErrorCode')
    void 'test longitude validation'() {
        when:
        domain.longitude = value

        then:
        expected == domain.validate(['longitude'])
        domain.errors['longitude']?.code == expectedErrorCode

        where:
        value                  | expected | expectedErrorCode
        null                   | true     | null
        0                      | true     | null
        90                     | true     | null
        90.1                   | true     | null
        -90                    | true     | null
        -180                   | true     | null
        180                    | true     | null
        180.1                  | false    | 'range.toobig'
        -180.1                 | false    | 'range.toosmall'
    }
    // end::latitudeAndLongitudeTests[]

*/
}
