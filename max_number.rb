def get_max numbers
    max_num = numbers[0]
    numbers.each_with_index { |v, i|
        puts "number loop number: #{v}, index: #{i}"
        puts "Before maxnum: #{max_num}"
        if max_num < v
            max_num = v
        end
        puts "After maxnum: #{max_num}"
    }
    puts max_num
end

get_max [1,2,3,343, 6,4,5]