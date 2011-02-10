require 'money'

ActiveRecord::Base.send :include, Money
