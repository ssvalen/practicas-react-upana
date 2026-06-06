from flask_marshmallow import Marshmallow
from .models import Student, Career

ma = Marshmallow()

# --- Career Schema
class CareerSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Career
        load_instance = True


career_schema = CareerSchema()
careers_schema = CareerSchema(many=True)

# --- Student Schema
class StudentSchema(ma.SQLAlchemyAutoSchema):
    career = ma.Nested(CareerSchema)

    class Meta:
        model = Student
        load_instance = True
        include_fk = True


student_schema = StudentSchema()
students_schema = StudentSchema(many=True)