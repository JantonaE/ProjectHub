
import datetime


def compare_dates(f1, f2):
    d1, m1, y1 = [int(x) for x in (f1).split('/')]
    d2, m2, y2 = [int(x) for x in (f2).split('/')] 
    date1 = datetime(y1, m1, d1)
    date2 = datetime(y2, m2, d2)
    return (date1 - date2).days
